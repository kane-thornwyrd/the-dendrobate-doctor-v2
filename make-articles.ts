import {mkdir, readdir, writeFile} from 'node:fs/promises'
import {existsSync, rmSync} from 'node:fs'
import {join as pathJoin, parse as parsePath} from 'node:path'
import remarkFrontmatter from 'remark-frontmatter'
import { remarkDefinitionList, defListHastHandlers } from 'remark-definition-list'
import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm'
import remarkHeadingId from 'remark-heading-id'
import remarkBreaks from 'remark-breaks'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'
import {unified} from 'unified'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import remarkToc from 'remark-toc'
import rehypeSlug from 'rehype-slug'
import {read} from 'to-vfile'
import {parse as YAMLParse} from 'yaml'
import deburr from 'lodash.deburr'
import mergeWith from 'lodash.mergewith'
import uniq from 'lodash.uniq'

const PATH = 'src/blog/'
const newFolderName = PATH.replace(/blog/i, 'blog-rendered')

const ucFirst = (s: string) => s[0].toUpperCase() + s.slice(1)
const lcFirst = (s: string) => s[0].toLowerCase() + s.slice(1)
const indexFile = pathJoin(newFolderName, 'index.ts')
type Article = { article: string, tags: string[], title: string, description: string, date: string, url: string }
const articles: Article[] = [];

try {
  if (!existsSync(newFolderName)) {
    await mkdir(newFolderName, {recursive: true})
  }
  if (existsSync(indexFile)) {
    rmSync(indexFile, {recursive: true})
    await writeFile(indexFile,'', { flag: 'w+' })
  }
  const tags: Record<string, Article[]> = {}
  
  await Promise.allSettled((await readdir(PATH)).map(async filename => {
    console.log(`IN: ${filename}`);
    
    const result: {
      metadata: { tags: string[], title: string, description: string, date: string },
      rendered: string
    } = {metadata: {tags: [], title: '', description: '', date: ''}, rendered: ''}
    const fullFilename = pathJoin(PATH, filename)
    const file = await unified()
      .use(remarkParse)
      .use(remarkBreaks)
      .use(remarkHeadingId)
      .use(remarkFrontmatter, ['yaml', 'toml'])
      .use(remarkDefinitionList)
      .use(function () {
        // @ts-expect-error TS is missing that the node returned contain a children prop
        return function ({children}) {
          result.metadata = YAMLParse(children[0].value)
        }
      })
      .use(remarkToc, {maxDepth: 3})
      .use(remarkRehype, {
        handlers: {
          // any other handlers
          ...defListHastHandlers,
        }
      })
      .use(rehypeSlug)
      .use(rehypeAutolinkHeadings, { behavior: 'wrap' })
      .use(rehypeStringify)
      .process(await read(fullFilename))
    
    const newFileName = deburr(parsePath(fullFilename).name).replace(/[.\s]/ig, '_') + '.tsx'
    const content = (file.value as string)
    
    const HTML_ATTRS = /\s(tabindex|class)(=[{"][^"]+[}"])/gi
    const MONO_BALISE = /<([bh])r>/gi
    const TABINDEX_MARSHALL = /tabindex="([-\d]+)"/gi
    const VARIABLES_REGEX = /\{\{\s+([^}]+)\s+}}/gi
    const CALLBACK_REGEX = /\{%\s*(\w+)\s*(.+)%}/gi
    
    enum ATTRS_SUBS {
      'tabindex' = 'tabIndex',
      'class' = 'className',
    }
    
    const variables: string[] = ['className?: string']
    
    const treatedContent = content
      .replace(/h(\d)/ig, (m, a) => `h${parseInt(a[0])+1}`)
      .replace(/<img([^>]+)>/ig, (match, args) => `<img${args}/>`)
      .replace(MONO_BALISE, (_, args) => `<${args}r />`)
      // eslint-disable-next-line no-irregular-whitespace
      .replace(/ /ig, '&nbsp;')
      .replace(/[’’]/ig, '&rsquo;')
      .replace(/–/ig, '&#45;')
      .replace(TABINDEX_MARSHALL, (_, args) => {
        return `tabindex={${args}}`
      })
      .replace(HTML_ATTRS, (match, args) => {
        return match.replace(args, ATTRS_SUBS[args])
      })
      .replace(VARIABLES_REGEX, (match, ...args) => {
        if (!args[0]) return match
        variables.push(`${args[0]}: string`)
        return `{ ${args[0]} }`
      })
      .replace(CALLBACK_REGEX, (match, ...args) => {
        if (!args[0]) return match
        variables.push(`${args[0]}: (...args: unknown[]) => string`)
        return `{ ${args[0]}(${args[1].split(',').map(arg => arg.replace(/^"(.+)"$/, (match, ...a) => {
          return '"' + a[0].replace(/"/ig, `'`) + '"'
        })).join(', ')}) }`
      })
      .replace('<p>{ ', '{ ')
      .replace(' }</p>', ' }')
      .replace(/>\s+</gi, () => '>\n<')
    
    variables.concat(Array.from(content.matchAll(VARIABLES_REGEX))
      .map(f => `${f[1]}: string`))
    
    const classNamizator = (s: string) => {
      const out = `${ucFirst(s.replace(/[_-]+/g, '_'))}`.split('.')[0]
      return out.split('_').reduce((prev, curr) => prev + ucFirst(curr))
    }
    
    const articleClassName = 'Article' + classNamizator(newFileName)
    
    const articleTags =
      mergeWith(Object.fromEntries(result.metadata.tags.map(t => [ucFirst(t), [articleClassName]])))
    
    const data = new Uint8Array(Buffer.from(`
import {FC} from "react";

export const ${articleClassName}Metadata = ${JSON.stringify(result.metadata)}

export type ${articleClassName}Props = {${uniq(variables).join(', ')}}

export const ${articleClassName} : FC<${articleClassName}Props> = ({
  ${uniq(variables.map(v => v.replace('?', '')
        .split(':')[0]))
      .join(', ')}
}) => {
  return (<div className={className}>
      ${treatedContent}
    </div>)
}`))
    
    const declaration = `import {
      ${articleClassName}
    } from './${newFileName.split('.')[0]}'\n`


    console.log(`OUT: ${newFileName}`)
    await writeFile(pathJoin(newFolderName, newFileName), data, {flag: 'w'})
    await writeFile(indexFile, declaration, {flag: 'a'})
    articles.push({
      ...result.metadata,
      article: articleClassName,
      url: lcFirst(classNamizator(newFileName))
    })
    
    for (const tag in articleTags) {
      const newTag = ucFirst(tag)
      if (!tags[newTag]) tags[newTag] = []
      tags[newTag] = [...tags[newTag], 
        articles.filter( v => v.article === articleClassName)[0] as Article]
    }
    
  }))
  
  const tagsString : string[] = []

  for (const [key, value] of Object.entries(tags)) {
    tagsString.push('"' + key + '": [' + "\n" + value
    .map(({ title, description, date, url }) => `{
      "title": "${ title }",
      "description": "${ description }",
      "date": "${ date }",
      "url": "article/${ url }"
    }`).join(",\n") + "\n]")
  }

  await writeFile(indexFile, `
export const articles = [${articles.reduce((prev, current) => {
  return `${prev}
    {
      "tags": ${JSON.stringify(current.tags)},
      "title": "${current.title}", 
      "description": "${current.description.replace('\'', '&apos;')}", 
      "date": "${current.date}",
      "article": ${current.article},
      "url": "${current.url}"
    },
  `
}, '')}]

export const tags = {${tagsString.join(",\n")}}
`, {flag: 'a+'})
  
} catch (err) {
  console.error(err);
}
