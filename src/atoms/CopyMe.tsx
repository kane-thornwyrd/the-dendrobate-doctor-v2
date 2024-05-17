import { MouseEventHandlerDecorator, cloneObject } from "@/utils";
import { Children, FC, MouseEvent, PropsWithChildren, isValidElement } from "react";

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
      console.log('done')
    }
  }

  return (<div onClick={handleClick}>{children}</div>)
}