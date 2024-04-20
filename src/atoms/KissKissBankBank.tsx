// @ts-expect-error ts-stupid
import KissKissBankBankIcon from '@images/KissKissBankBank.svg?react'
import { useTheme } from '../contexts/ThemeButton'

export const KissKissBankBank = () => {
  
  const {theme} = useTheme()
  
  return (<a className={'btn btn-ghost drop-shadow-md vr-normal-base tooltip'}
href={'https://www.kisskissbankbank.com/fr/projects/the-dendrobate-doctor'} data-tip="Pour remercier">
<KissKissBankBankIcon fill={theme === 'light' ? 'black' : '#a0a0a0'}/>
</a>)}