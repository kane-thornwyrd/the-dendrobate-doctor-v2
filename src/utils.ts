export const ucFirst = (s: string): string => s[0].toUpperCase() + s.slice(1)

export const getAttributesFromObject = <T extends Record<string, unknown> >(attrs: (keyof T)[], obj : T) => attrs.map(attr => obj[attr])