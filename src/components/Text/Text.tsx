import React from 'react'


interface TextProps{
  title: boolean,
  subtitle: boolean,
  className: string,
  style: object,
  children: string,
}
function Text(props: TextProps) {

    const {children, title, subtitle, ...rest} = props
    
    if(title) return <h1 {...rest}>{children}</h1>

    if(subtitle) return <h1 {...rest}>{children}</h1>

    return <p {...rest}>{children}</p>
}

export default Text