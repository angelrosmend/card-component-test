import React from 'react'


interface TextProps{
  title?: boolean,
  subtitle?: boolean,
  label?: boolean,
  className?: string,
  style?: object,
  children: string | number,
}
function Text(props: TextProps) {

    const {children, title, subtitle, label, ...rest} = props
    
    if(title) return <h1 {...rest}>{children}</h1>

    if(subtitle) return <h3 {...rest}>{children}</h3>

    if(label) return <label {...rest}>{children}</label>

    return <p {...rest}>{children}</p>
}

export default Text