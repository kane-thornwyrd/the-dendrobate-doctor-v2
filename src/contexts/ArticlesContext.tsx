import { FC, PropsWithChildren, createContext, useContext } from "react"
import { Route } from "wouter"

import { articles } from "../blog-rendered"
import {
  createArticleProps,
} from '@/atoms/Article'
import { ArticleEntry } from "@atoms/Article"

export type HasDate = {
  date: string
}

const sortByDate = <T extends HasDate>(a : T, b: T) => (new Date(b.date)).getTime() - (new Date(a.date)).getTime()

export const sortArticleEntryByDate = (a:ArticleEntry[] ): ArticleEntry[] => a.sort(sortByDate)

const articlesList = Object.keys(articles).map(articleMachineName => articles[articleMachineName]).sort(sortByDate) 

type ArticlesContext = ArticleEntry[]

const ArticleCtx = createContext([] as ArticlesContext)

export const ArticleWrapper: FC<PropsWithChildren> = ({children}) => {
  return (
    <ArticleCtx.Provider value={articlesList}>
        {children}
    </ArticleCtx.Provider>
  )
}

export const articleRoutes = articlesList.map(
  ({ title, url, article }, index) => (<Route path={`${import.meta.env.BASE_URL}article/${url}`} key={index + title}>{article(createArticleProps({
    className:'p-6 flex flex-row flex-wrap items-center bg-base-100',
    title
  }))}</Route>)
)

export const useArticles = () => useContext(ArticleCtx)