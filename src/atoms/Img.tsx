export const img = (src: string, alt: string, style: string) => {
  if (!!alt && !!style){
    const styled: Record<string, string> = {}
    style.split(';').map(rule => {
      const [ attr, val] = rule.split(':')
      styled[attr] = val
    })

    styled['maxHeight'] = '400px'
    styled['width'] = 'auto'
    styled['margin'] = '0 auto'
    return (<img src={src} alt={alt} style={styled} />)
  }
  if(alt) return (<img src={src} alt={alt} />)
  return (<img src={src} alt="" />)
}