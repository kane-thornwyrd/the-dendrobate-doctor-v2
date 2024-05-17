import { Route, Switch } from "wouter"
import { useHashLocation } from "wouter/use-hash-location"
import BxArrowToTop from '~icons/bx/arrow-to-top'

import '@/App.css'
import {Footer} from "@molecules/Footer.tsx"
import {Layout} from "@molecules/Layout.tsx"
import { articleRoutes, useArticles } from "@contexts/ArticlesContext.tsx"
import { sortArticleEntryByDate } from "@atoms/Article";
import { URL_BASE } from "@/main.tsx"
import { articles, tags } from "@blog"
import { Tag } from "@molecules/Tag.tsx"
import { getAttributesFromObject } from "@/utils.ts"
import { createArticleProps } from "@atoms/Article";
import { AboutMe, AboutMeURL } from "./aboutMe";

function App() {
  const articlesList = useArticles()
  const [ location ] = useHashLocation()
  console.log(location)
  
  return (
    <>
      <Layout>
        <div className="container article mx-auto max-w-full md:max-w-screen-md xl:max-w-[90vw]">
          <Switch location={location}>
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

            <Route path={AboutMeURL}>
                <AboutMe className='p-6 flex flex-row flex-wrap items-center bg-base-100 vr-tight-base text-base article' />
            </Route>
          </Switch>
        </div>
        <Footer/>
        <a href="#root" className="back-to-top md:hidden">
          <BxArrowToTop className="text-2xl"/>
        </a>
      </Layout>
    </>
  )
}

export default App
