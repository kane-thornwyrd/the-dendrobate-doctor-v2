import {FC} from "react"
import { Link } from "wouter"
import { URL_BASE } from "@/main"
import { ArticleEntry } from "@atoms/Article"

export type TimelineProps = {
  className?: string 
  articles: ArticleEntry[]
}
export const Timeline: FC<TimelineProps> = ({articles, className}) => {
  return (
    <div
      className={className}>
        {articles.map(({title, tags, url}, index) => (
          <Link to={`${URL_BASE}article/${url}`} key={index + title + 'link'} asChild>
            <div key={index + title} className="cursor-pointer card bg-base-100 text-neutral-content shadow-xl hover:bg-secondary-content m-2">
              <div className="card-body">
                <h2 className="card-title pt-0 text-secondary">
                {title}
                </h2>
                <p />
                <div className="mt-8 card-actions justify-end">
                  {tags.map((t, i) => (
                    <Link to={`${URL_BASE}tag/${t}`} asChild  key={t+i+'link'}>
                      <div key={t+i} className="cursor-pointer badge hover:badge-primary">{t}
                      </div>
                    </Link>
                    ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
    </div>
  )
}
