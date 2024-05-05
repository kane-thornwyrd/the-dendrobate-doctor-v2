import { FC } from "react"
import { ArticleEntry } from "@atoms/Article"
import { Timeline } from "./Timeline"

export type TagProps = {
  which: string
  articles: ArticleEntry[]
}

export const Tag: FC<TagProps> = ({ which, articles }) => {
  return (
    <>
      <h2 className="vr-tight-7xl">{which}</h2>
      <Timeline articles={articles} />
    </>
  )
}