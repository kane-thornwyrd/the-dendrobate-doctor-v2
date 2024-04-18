import { FC, PropsWithChildren, createContext, useContext } from "react"
import { Route } from "wouter"
import { img } from '../atoms/Img'

import { articles } from "../blog-rendered"

type Article = {
    tags: string[]
    title: string 
    description: string 
    date: string
    article : unknown
    url: string
}

const articlesList = ([] as Article[]).concat(articles).sort((a, b) => (new Date(b.date)).getTime() - (new Date(a.date)).getTime())

type ArticlesContext = Article[]

const ArticleCtx = createContext([] as ArticlesContext)

export const ArticleWrapper: FC<PropsWithChildren> = ({children}) => {
  return (
    <ArticleCtx.Provider value={articlesList}>
        {children}
    </ArticleCtx.Provider>
  )
}

export const articleRoutes = articles.map(
  ({ url, article, title }, index) => (<Route path={`article/${url}`} key={index + title}>{article({
    className:'p-6 flex flex-row flex-wrap items-center',
    title,
    KissKissBankBank: () => '',
    Facebook: () => '',
    UTip:() => '',
    abbr: () => '',
    img
  })}</Route>)
)

export const useArticles = () => useContext(ArticleCtx)