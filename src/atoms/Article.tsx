import { FC, ReactNode } from "react"

export type ArticleProps = {
  className:string,
  title: string,
  KissKissBankBank: () => ReactNode,
  Facebook: () => ReactNode,
  UTip: () => ReactNode,
  quote: typeof quote,
  abbr: (text: ReactNode, meaning: string) => ReactNode,
  img: typeof img,
}

export const KissKissBankBankLink = () => (<a href="https://www.kisskissbankbank.com/fr/projects/the-dendrobate-doctor">KissKissBankBank</a>)

export const UTip = () => (
<>
  <a className="btn-ghost ">UTip</a> (maintenant c'est sur <a href="https://www.kisskissbankbank.com/fr/projects/the-dendrobate-doctor">KissKissBankBank</a>)
</>
)

export const Facebook = () => (
    <a href="https://www.facebook.com/TheDendrobateDoctor/?ref=blog">la page Facebook</a>
)

export const quote = (text: string, author: string) => (<blockquote><p>{text.replace('`', "'")}</p><cite>{author}</cite></blockquote>)

export const abbr = (text: ReactNode, meaning: string) => (<abbr title={meaning}>{text}</abbr>)

export const img = (src: string, alt?: string, style?: string) => {
  if (!!alt && !!style){
    const styled: Record<string, string> = {}
    style.split(';').map(rule => {
      const [ attr, val] = rule.split(':')
      styled[attr] = val
    })

    styled['maxHeight'] = '400px'
    styled['width'] = 'auto'
    styled['margin'] = '0 auto'
    return (<img src={src} alt={alt} style={styled} />)
  }
  if(alt) return (<img src={src} alt={alt} />)
  return (<img src={src} alt="" />)
}


export const createArticleProps = (dynamicProps: {
  title: string
  className: string
}): ArticleProps => ({
  KissKissBankBank: KissKissBankBankLink,
  Facebook,
  UTip,
  abbr,
  img,
  quote,
  ...dynamicProps
})

export type Article = FC<ArticleProps>
export type ArticleEntry = {
  tags: string[]
  title: string
  description: string
  date: string
  article: Article
  url: string
}
export const sortArticleEntryByDate = (a: ArticleEntry[]): ArticleEntry[] => a.sort(sortByDate) 
export type HasDate = {
  date: string
}

export const sortByDate = <T extends HasDate>(a: T, b: T) => (new Date(b.date)).getTime() - (new Date(a.date)).getTime()

