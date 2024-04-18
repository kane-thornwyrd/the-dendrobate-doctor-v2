import {createContext, Dispatch, FC, PropsWithChildren, SetStateAction, useContext} from "react";
import {useLocalStorage} from "../useLocalstorage.ts";


type DyslexicContext = {
  isDyslexic: boolean,
  setIsDyslexic: Dispatch<SetStateAction<boolean>>
}

const DyslexicCtx = createContext({
  isDyslexic: false,
  setIsDyslexic: () => {
  }
} as DyslexicContext)


export const DyslexicWrapper: FC<PropsWithChildren> = ({children}) => {
  const [isDyslexic, setIsDyslexic] = useLocalStorage('dyslexicSetting', false)
  const newDyslexicContext: DyslexicContext = {isDyslexic, setIsDyslexic: setIsDyslexic}
  return (
    <DyslexicCtx.Provider value={newDyslexicContext}>
      <div className={isDyslexic ? 'dyslexic' : ''}>
        {children}
      </div>
    </DyslexicCtx.Provider>
  )
}


export const DyslexicButton: FC<Record<string, never>> = () => {
  const {isDyslexic, setIsDyslexic} = useContext(DyslexicCtx)
  return (
    <label className="flex cursor-pointer gap-2 justify-center">
      <p>Aa</p>
      <input type="checkbox" className="toggle" checked={isDyslexic} onChange={(t) => setIsDyslexic(t.target.checked)}/>
      <p className={'dyslexic'}>Aa</p>
    </label>)
}
