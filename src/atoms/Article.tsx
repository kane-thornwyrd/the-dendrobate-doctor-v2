// @ts-expect-error ts-stupid
import { useTheme } from '@/contexts/ThemeButton'
import { FC, ReactNode } from "react"

export type ArticleProps = {
  className:string,
  title: string,
  KissKissBankBank: () => ReactNode,
  Facebook: () => ReactNode,
  UTip: () => ReactNode,
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
}): ArticleProps => ({
  className:'p-6 flex flex-row flex-wrap items-center',
  KissKissBankBank: KissKissBankBankLink,
  Facebook,
  UTip,
  abbr,
  img,
  ...dynamicProps
})

export type Article = FC<ArticleProps>