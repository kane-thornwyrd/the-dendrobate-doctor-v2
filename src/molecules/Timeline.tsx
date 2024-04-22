import {FC} from "react";
import { useArticles } from "../contexts/ArticlesContext"
import { Link } from "wouter"
import { URL_BASE } from "@/main";

export const Timeline: FC<Record<string, never>> = () => {
  const articles = useArticles()
  return (
    <ul
      className="min-h-screen w-5/6 xl:w-[75vw] 2xl:w-[30vw] mr-14 xl:mr-0 xl:pl-6 2xl:px-3">
        {articles.map(({title, tags, url}, index) => (
          /* <li key={index + title}>
            <div className="timeline-middle">
              <MaterialSymbolsLightPushPin className="h-5 w-5"/>
            </div>
            <div className="timeline-start mb-10">
              <div className="text-lg font-black text-base-500">
                <h1>{title}</h1>
                <ul className="vr-tight-xs">{tags.map(t => (<li className="badge badge-ghost">{t}</li>))}</ul>
              </div>
            </div>
          </li> */
          <Link to={`${URL_BASE}article/${url}`} key={index + title + 'link'} asChild>
            <li key={index + title} className="card glass shadow-xl my-6 mx-0">
              <div className="card-body hover:bg-secondary hover:rounded-2xl">
                <h2 className="card-title vr-relaxed-xl">
                {title}
                </h2>
                <div className="card-actions justify-end">
                  <ul className="vr-tight-xs">{tags.map((t, i) => (
                  <Link to={`${URL_BASE}tag/${t}`} asChild  key={t+i+'link'}>
                    <li key={t+i} className="badge badge-ghost hover:badge-primary m-1">{t}
                    </li>
                  </Link>
                  ))}</ul>
                </div>
              </div>
            </li>
          </Link>
        ))}
    </ul>
  )
}
