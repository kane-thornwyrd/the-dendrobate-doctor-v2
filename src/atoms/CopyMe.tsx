import { FC, MouseEvent, PropsWithChildren } from "react";

export type CopyMeProps = {
  textToCopy: string
}

export const CopyMe: FC<CopyMeProps & PropsWithChildren> = ({ children, textToCopy }) => {
  
  const handleClick= async (event: MouseEvent<HTMLDivElement>) => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      console.log('Content copied to clipboard');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
    finally{
      console.log('done with ' + event)
    }
  }

  return (<div onClick={handleClick}>{children}</div>)
}