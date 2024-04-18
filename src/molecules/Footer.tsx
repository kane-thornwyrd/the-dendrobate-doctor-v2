import {FC, useEffect, useState} from "react";
import DendrobateLogo from '@images/dendrobate.svg?react'
import RiFacebookFill from '~icons/ri/facebook-fill';
import RiYoutubeFill from '~icons/ri/youtube-fill';
import MaterialSymbolsLightMailOutline from '~icons/material-symbols-light/mail-outline';
import {ThemeCtx} from "../contexts/ThemeButton.tsx";
import { KissKissBankBank } from "../atoms/KissKissBankBank.tsx";

export type FooterProps = {
  className?: string
}

export const getRandomInt = (max: number): number => Math.floor(Math.random() * max)

export const Footer: FC<FooterProps> = ({className}) => {
  const [currentQuote, setCurrentQuote] = useState(0)
  const quotes = [
    'c\'est plus compliqué que ça …',
    'Je sers la Science et c\'est ma joie…',
  ]
  const nextQuote = () => {
    setCurrentQuote(currentQuote + 1 % quotes.length)
  }
  useEffect(() => {
    setCurrentQuote(getRandomInt(quotes.length))
  },)
  return (
    <div className={`${className} drop-shadow-md`}>
      <footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
        <aside className="items-center grid-flow-col btn btn-ghost text-start"
               onClick={nextQuote}>
          <DendrobateLogo viewBox="0 0 32 32" width='32px' height='32px' />
          <p>The Dendrobate Doctor<br/><q>{quotes[currentQuote]}</q></p>
        
        </aside>
        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <KissKissBankBank />
            <a className={'no-icon text-3xl text-red-700 btn btn-ghost'}
               href={'https://www.youtube.com/channel/UCEz2bxvWCWpudAH-wpJuKOw'}>
              <RiYoutubeFill/>
            </a>
            <a className={'no-icon text-3xl text-blue-700 btn btn-ghost'} href={'https://www.facebook.com/TheDendrobateDoctor'}>
              <RiFacebookFill/>
            </a>
            <a className={'no-icon text-3xl btn btn-ghost'} href={'mailto:thedendrobatedoctor+backupblog@gmail.com'}>
              <MaterialSymbolsLightMailOutline/>
            </a>
          </div>
        </nav>
      </footer>
    </div>
  )
}
