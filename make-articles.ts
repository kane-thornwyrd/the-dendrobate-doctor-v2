import {mkdir, readdir, writeFile} from 'node:fs/promises'
import {existsSync, rmSync} from 'node:fs'
import {join as pathJoin, parse as parsePath} from 'node:path'
import remarkFrontmatter from 'remark-frontmatter'
import { remarkDefinitionList, defListHastHandlers } from 'remark-definition-list'
import remarkParse from 'remark-parse'
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
import { ArticleEntry } from './src/atoms/Article'

const PATH = 'src/blog/'
const newFolderName = PATH.replace(/blog/i, 'blog-rendered')

type CallableStringMethodNames = {
  [K in keyof String]: String[K] extends (...args: any[]) => any ? K : never;
}[keyof String];

const stringTransformFirst = (method: CallableStringMethodNames & ('toUpperCase' | 'toLowerCase')) => (s:string, ...args: unknown[]) => {
  const toTransform = s.toString()
  switch (toTransform.length) {
    case 0:
      return ''
    case 1:
      return toTransform[method].apply(s, args)
    default:
      return toTransform.slice(0,1)[method]() + toTransform.slice(1)
  }}

const ucFirst = stringTransformFirst('toUpperCase')
  
const lcFirst = stringTransformFirst('toLowerCase')

const toStringListString = (sl: string[]) => `[` + sl.map(s => `"${s}"`).join(', ') + `]`

const indexFile = pathJoin(newFolderName, 'index.ts')

type Declaratize<T, K extends keyof T> = {
  [P in keyof T]: P extends K ? string : T[P];
}

export type ArticleEntryDeclaration = Declaratize<ArticleEntry, 'article'>

const articles: ArticleEntryDeclaration[] = [];

const classNamizator = (s: string, existing: string[] = []): [string, string[]] => {
  const out = `${ucFirst(deburr(s).replace(/[\s'…_-]+/g, '_'))}`
  .split('.')[0]
  .split('_')
  .reduce((prev, curr) => prev + ucFirst(curr), '')

  const iterateName = (s) => {
    const results = /^(?<name>.+[^\d]?)(__(?<iter>\d+))?$/.exec(s)

    const out = results.groups?.iter ? 
      `${results[0]}__${parseInt(results.groups?.iter ? results.groups.iter : '0', 10) + 1}`
    : 
      `${results[0]}`

    return out
  }

  const newName = existing.indexOf(out) > -1 ? iterateName(out) : out
  return [ newName, [].concat(existing, [newName])] 
}

try {
  if (!existsSync(newFolderName)) {
    await mkdir(newFolderName, {recursive: true})
  }
  if (existsSync(indexFile)) {
    rmSync(indexFile, {recursive: true})
    await writeFile(indexFile,'', { flag: 'w+' })
  }
  const tags: Record<string, ArticleEntryDeclaration[]> = {}

  const articleElementTemplate = ({articleClassName, metadata, properties, content}) => `
    import { Article } from "@/atoms/Article";
    
    export const ${articleClassName}Metadata = ${JSON.stringify(metadata)}
    
    export const ${articleClassName} : Article = ({
      ${uniq(properties.map(v => v.replace('?', '')
            .split(':')[0]))
          .join(', ')}
    }) => {
      return (<div className={className}>
          ${content}
        </div>)
  }`

  let alreadyNamedEntries: string[] = []
  const articleEntryTemplate= ({ tags, title, description, date, article, url}: ArticleEntryDeclaration) => {
    const [newMachineTitle, newAlreadyNamedEntries] = classNamizator(title, alreadyNamedEntries)
    alreadyNamedEntries = newAlreadyNamedEntries
    return `
  "${newMachineTitle}" :{
      "tags": ${toStringListString(tags)},
      "title": "${title}", 
      "description": "${description.replace('\'', '&apos;')}", 
      "date": "${date}",
      "article": ${article},
      "url": "article/${url}"
    },
  `}

  const mapArticleEntryTemplate = (articleEntry: ArticleEntryDeclaration, _i: number, _array: ArticleEntryDeclaration[]): string => articleEntryTemplate(articleEntry) 
  
  await Promise.allSettled((await readdir(PATH)).map(async filename => {
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
      // @ts-ignore
      .use(function metaParser() {
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
    
    const newFileName: string = deburr(parsePath(fullFilename).name).replace(/[.\s]/ig, '_') + '.tsx'
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
        return `{ ${args[0]}(${args[1].split(',').map(arg => arg.replace(/^"(.+)"$/, (_match, ...a) => {
          return '"' + a[0].replace(/"/ig, `'`) + '"'
        })).join(', ')}) }`
      })
      .replace('<p>{ ', '{ ')
      .replace(' }</p>', ' }')
      .replace(/>\s+</gi, () => '>\n<')
    
    variables.concat(Array.from(content.matchAll(VARIABLES_REGEX))
      .map(f => `${f[1]}: string`))
    
    const articleClassName = 'Article' + classNamizator(newFileName)[0]
    
    const articleTags =
      mergeWith(Object.fromEntries(result.metadata.tags.map(t => [ucFirst(t), [articleClassName]])))

    const data = new Uint8Array(Buffer.from(articleElementTemplate({ articleClassName, metadata: result.metadata, properties: variables, content: treatedContent})))
    
    const declaration = `import {
      ${articleClassName}
    } from './${newFileName.split('.')[0]}'\n`

    await writeFile(pathJoin(newFolderName, newFileName), data, {flag: 'w'})
    await writeFile(indexFile, declaration, {flag: 'a'})
    articles.push({
      ...result.metadata,
      article: articleClassName,
      url: lcFirst(classNamizator(newFileName)[0])
    })
    
    for (const tag in articleTags) {
      const newTag = ucFirst(tag)
      if (!tags[newTag]) tags[newTag] = []
      tags[newTag] = [...tags[newTag], 
        articles.filter( v => v.article === articleClassName)[0] as ArticleEntryDeclaration]
    }
    
  }))
  
  const tagsString : string[] = []

  for (const [key, value] of Object.entries(tags)) {
    tagsString.push('"' + key + '": [' + "\n" + value
    .map(v => '"' + classNamizator(v.title)[0] + '"').join(",\n") + "\n]")
  }

  await writeFile(indexFile, `
import { ArticleEntry } from '@atoms/Article'
export const articles: {[key: string]: ArticleEntry}  = {${articles.reduce((prev, current) => {
  return `${prev}${articleEntryTemplate(current)}`
}, '')}}

export const tags = {${tagsString.join(",\n")}}
`, {flag: 'a+'})
  
} catch (err) {
  console.error(err);
}
