import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import 'unfonts.css'
import {DyslexicWrapper} from "./contexts/DyslexicButton.tsx";
import {ThemeWrapper} from "./contexts/ThemeButton.tsx";
import { ArticleWrapper } from './contexts/ArticlesContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <DyslexicWrapper>
      <ThemeWrapper>
        <ArticleWrapper>
          <App/>
        </ArticleWrapper>
      </ThemeWrapper>
    </DyslexicWrapper>
  </React.StrictMode>,
)

export const URL_BASE = import.meta.env.BASE_URL ?? '/';
