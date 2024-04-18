import {ChangeEvent, createContext, Dispatch, FC, PropsWithChildren, SetStateAction, useContext} from "react";
import MeteoconsClearDayFill from '~icons/meteocons/clear-day-fill';
import MeteoconsClearNightFill from '~icons/meteocons/clear-night-fill';
import {useLocalStorage} from "../useLocalstorage.ts";

const themes = ['light', 'dark']
const nextThemesNames: { [key: string]: string } = {'light': 'sombre', 'dark': 'clair'}

type ThemeContext = {
  theme: string,
  setTheme: Dispatch<SetStateAction<string>>
}

export const ThemeCtx = createContext({
  theme: 'light',
  setTheme: () => {
  }
} as ThemeContext)

export const useTheme = () => useContext(ThemeCtx)

export const ThemeWrapper: FC<PropsWithChildren> = ({children}) => {
  const [theme, setTheme] = useLocalStorage('themeSetting', 'light');
  const newThemeContext: ThemeContext = {theme, setTheme: setTheme}
  document.getElementsByTagName("html")[0].setAttribute("data-theme", theme)
  return (
    <ThemeCtx.Provider value={newThemeContext}>
      {children}
    </ThemeCtx.Provider>
  )
}

export const ThemeButton: FC<Record<string, never>> = () => {
  const {theme, setTheme} = useContext(ThemeCtx)
  
  function toggleTheme(e: ChangeEvent<HTMLInputElement>) {
    const newTheme = themes[+e.target.checked]
    setTheme(newTheme);
  }
  
  return (
    <label className="swap swap-rotate">
      
      {/* this hidden checkbox controls the state */}
      <input type="checkbox" onChange={toggleTheme} checked={theme === themes[1]}/>
      thème {nextThemesNames[theme]}
      
      <MeteoconsClearDayFill className="swap-on fill-current w-10 h-10"/>
      
      <MeteoconsClearNightFill className="swap-off fill-current w-10 h-10"/>
    
    </label>
  )
}
