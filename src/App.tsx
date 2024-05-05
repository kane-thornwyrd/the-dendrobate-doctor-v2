import { Route, Switch } from "wouter";
import BxArrowToTop from '~icons/bx/arrow-to-top'

import '@/App.css'
import {Footer} from "@molecules/Footer.tsx"
import {Layout} from "@molecules/Layout.tsx"
import { articleRoutes, sortArticleEntryByDate, useArticles } from "@contexts/ArticlesContext.tsx"
import { URL_BASE } from "@/main.tsx"
import { articles, tags } from "@blog"
import { Tag } from "@molecules/Tag.tsx"
import { getAttributesFromObject } from "@/utils.ts"
import { createArticleProps } from "@atoms/Article";

function App() {
  const articlesList = useArticles()
  return (
    <>
      <Layout>
        <div className="container article mx-auto max-w-full md:max-w-screen-md xl:max-w-[90vw]">
          <Switch>
            {articlesList.slice(0,1).map(({ article, title }, index) => 
            (<Route path={URL_BASE} key={index + title}>{article(createArticleProps({
                className:'p-6 flex flex-row flex-wrap items-center bg-base-100',
                title
              }))}</Route>))}
            {articleRoutes}
            {Object.keys(tags).map((tag, i) => (
              <Route path={`${URL_BASE}tag/${tag}`} key={i + tag}>
                <Tag which={tag} articles={sortArticleEntryByDate(getAttributesFromObject(tags[tag as keyof typeof tags], articles))}/>
              </Route>
            ))}
          </Switch>
        </div>
        <Footer/>
        <a href="#root" className="back-to-top">
          <BxArrowToTop className="text-2xl"/>
        </a>
      </Layout>
    </>
  )
}

export default App
