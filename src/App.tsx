import { Route, Switch } from "wouter";
import { img } from './atoms/Img.tsx'

import './App.css'
// import { img } from './atoms/Img.tsx'
import {Footer} from "./molecules/Footer.tsx"
import {Layout} from "./molecules/Layout.tsx"
import { articleRoutes, useArticles } from "./contexts/ArticlesContext.tsx";

function App() {
  const articles = useArticles()
  return (
    <>
      <Layout>
        <div className="container article mx-auto max-w-full md:max-w-screen-md xl:max-w-[90vw] bg-base-100">
          <Switch>
            {articles.slice(0,1).map(({ url, article, title }, index) => (<Route path='/' key={index + title}>{article({
                className:'p-6 flex flex-row flex-wrap items-center',
                title,
                KissKissBankBank: () => '',
                Facebook: () => '',
                UTip:() => '',
                abbr: () => '',
                img
              })}</Route>))}
            {articleRoutes}
          </Switch>
        </div>

        <Footer/>
      </Layout>
    </>
  )
}

export default App
