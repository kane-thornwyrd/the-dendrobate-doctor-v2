import {writeFile, rm} from 'node:fs/promises'

import { Feed } from "feed"
import { articles } from './src/blog-rendered'
import { ArticleEntry, sortArticleEntryByDate } from "./src/atoms/Article"

const BASE_URL = 'https://www.the-dendrobate-doctor.fr/'

const articlesEntries: ArticleEntry[] = sortArticleEntryByDate(Object.values(articles))

const latestArticle = articlesEntries[0]

const feed = new Feed({
  title: "The Dendrobate Doctor",
  description: "Flux pour se tenir au courant des dernières infos du Dendrobate Doctor",
  id: BASE_URL,
  link: BASE_URL,
  language: "en", // optional, used only in RSS 2.0, possible values: http://www.w3.org/TR/REC-html40/struct/dirlang.html#langcodes
  image: `${BASE_URL}dendrobate.png`,
  favicon: `${BASE_URL}dendrobate.ico`,
  copyright: `All rights reserved 2020, Dr. Pauline Delahaye`,
  updated: new Date(latestArticle.date),
  generator: "custom by Jena Thornwyrd",
  feedLinks: {
    json: `${BASE_URL}json`,
    atom: `${BASE_URL}atom`
  },
  author: {
    name: "Dr. Pauline Delahaye",
    email: "jean.cedric.t+dendrobate+blog@gmail.com",
    link: `${BASE_URL}moi`
  }
});

articlesEntries.forEach(post => {
  feed.addItem({
    title: post.title,
    id: `${BASE_URL}${post.url}`,
    link: `${BASE_URL}${post.url}`,
    description: post.description,
    author: [
      {
        name: "Dr. Pauline Delahaye",
        email: "jean.cedric.t+dendrobate+blog@gmail.com",
        link: `${BASE_URL}moi`
      },
    ],
    contributor: [
      {
        name: "Jena Thornwyrd",
        email: "jean.cedric.t+dendrobate+blog@gmail.com",
        link: ""
      },
    ],
    date: new Date(post.date),
  })
})

;(async () => Promise.allSettled([
  async () => {
    await rm('./public/json')
    return writeFile('./public/json', feed.json1(), { flag: 'w+' })
  },
  async () => {
    await rm('./public/atom')
    return writeFile('./public/atom', feed.atom1(), { flag: 'w+' })
  },
]))()