import { FC, PropsWithChildren, createContext, useContext } from "react"
import { Route } from "wouter"

import { articles } from "../blog-rendered"
import {
  Facebook,
  KissKissBankBankLink,
  UTip,
  abbr,
  img,
} from '@/atoms/Article'

type ArticleEntry = {
    tags: string[]
    title: string 
    description: string 
    date: string
    article : unknown
    url: string
}

const articlesList = ([] as ArticleEntry[]).concat(articles).sort((a, b) => (new Date(b.date)).getTime() - (new Date(a.date)).getTime())

type ArticlesContext = ArticleEntry[]

const ArticleCtx = createContext([] as ArticlesContext)

export const ArticleWrapper: FC<PropsWithChildren> = ({children}) => {
  return (
    <ArticleCtx.Provider value={articlesList}>
        {children}
    </ArticleCtx.Provider>
  )
}

export const articleRoutes = articles.map(
  ({ title, url, article }, index) => (<Route path={`${import.meta.env.BASE_URL}article/${url}`} key={index + title}>{article({
    className:'p-6 flex flex-row flex-wrap items-center',
    KissKissBankBank: KissKissBankBankLink,
    Facebook,
    UTip,
    abbr,
    img,
    title
  })}</Route>)
)

export const useArticles = () => useContext(ArticleCtx)