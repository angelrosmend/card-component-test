import React from 'react'

function IconSVG({iconProps = {}}) {

  return (
  <svg width={iconProps?.width || ""} 
       height={iconProps?.height || ""} 
       viewBox={iconProps?.viewBox || ""}
       fill={iconProps?.fill || ""} 
       xmlns={iconProps?.xmlns || "http://www.w3.org/2000/svg"}>
    <path d={ iconProps?.pathD || ""}
          fill={iconProps?.pathFill || ""}
          fillRule={iconProps?.pathfillRule || ""}
          clipRule={iconProps?.pathClipRule || ""}
    />
  </svg>
  )
}

export default IconSVG
