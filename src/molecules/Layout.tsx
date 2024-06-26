import {FC, PropsWithChildren} from "react"
import { Link } from "wouter"
import BxFoodMenu from '~icons/bx/food-menu'
import MaterialSymbolsLightDisplaySettingsOutlineSharp
  from '~icons/material-symbols-light/display-settings-outline-sharp'
import MaterialSymbolsLightRssFeedRounded from '~icons/material-symbols-light/rss-feed-rounded';
  //@ts-expect-error stupid
import DendrobateLogo from '@images/dendrobate.32.svg?react'
import {DyslexicButton} from "@contexts/DyslexicButton.tsx"
import {ThemeButton} from "@contexts/ThemeButton.tsx"
import {Timeline} from "@molecules/Timeline.tsx"
import { useArticles } from "@contexts/ArticlesContext.tsx"
import { AboutMeURL } from "@/aboutMe"
import { CopyMe } from "@atoms/CopyMe";

export const Layout: FC<PropsWithChildren> = ({children}) => {
  const articles = useArticles()
  const getFeedLink = (feed: string) => `feed:${window.location.origin}${import.meta.env.BASE_URL}${feed}`
  return (
    <div className="drawer 2xl:drawer-open">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle"/>
      <div className="drawer-content flex flex-col">
        
        <div className="navbar bg-base-100 drop-shadow-lg">
          <div className="flex-none">
            
            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost 2xl:hidden no-print">
              <BxFoodMenu className={'w-6 h-6'}/>
            </label>
          
          </div>
          <div className="flex-1">
            <DendrobateLogo />
            <Link to={import.meta.env.BASE_URL} asChild>
              <h1 className="cursor-pointer main-title pl-2">The Dendrobate Doctor</h1>
            </Link>
          </div>
          <div className="flex-none no-print">
            <Link to={getFeedLink('feed.atom.xml')} asChild>
              <button className="btn btn-ghost text-orange-500 btn-sm">
                atom
                <MaterialSymbolsLightRssFeedRounded />
              </button>
            </Link>
            <CopyMe textToCopy={getFeedLink('feed.json')}>
              <button className="btn btn-ghost text-blue-700 btn-sm">
                json
                <MaterialSymbolsLightRssFeedRounded />
              </button>
            </CopyMe>
            <Link to={AboutMeURL} asChild>
              <button className="btn btn-ghost btn-sm">
                À mon propos
              </button>
            </Link>
          </div>
          <div className="flex-none no-print">
            <ul className="menu menu-horizontal menu-sm">
              <li>
                <details>
                  <summary>
                    réglages de lecture <MaterialSymbolsLightDisplaySettingsOutlineSharp className="w-9 h-9"/>
                  </summary>
                  <ul className="rounded-t-none top-8 min-w-full">
                    <li><DyslexicButton/></li>
                    <li><ThemeButton/></li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
        </div>
        {children}
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
              <Timeline articles={articles} className="min-h-full w-5/6 xl:w-[75vw] 2xl:w-[30vw] mr-14 xl:mr-0 xl:pl-6 2xl:px-3"/>
      </div>
    </div>
  )
}
