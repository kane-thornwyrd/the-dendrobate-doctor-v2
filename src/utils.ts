import { EventHandler, MouseEvent } from "react"

export const ucFirst = (s: string): string => s[0].toUpperCase() + s.slice(1)

export const getAttributesFromObject = <T extends Record<string, unknown> >(attrs: (keyof T)[], obj : T) => attrs.map(attr => obj[attr])


export type Decorator<D extends Function> = (d?: D) => D

export type MouseEventHandlerDecorator = Decorator<EventHandler<MouseEvent<HTMLButtonElement>>>

const seen: unknown[] = [];
export const cloneObject = <T>(o: T): T => JSON.parse(JSON.stringify(o, function(key, val) {
  if (val != null && typeof val == "object") {
    if (seen.indexOf(val) >= 0) {
      return;
    }
    seen.push(val);
  }
  return val;
}))