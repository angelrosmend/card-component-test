import React from 'react'

function IconSVG({iconProps = {}, className = ""}) {

  return (
    <svg
      className={className}
      width={iconProps?.width || ""}
      height={iconProps?.height || ""}
      viewBox={iconProps?.viewBox || ""}
      fill={iconProps?.fill || ""}
      xmlns={iconProps?.xmlns || "http://www.w3.org/2000/svg"}
    >
      <path
        d={iconProps?.pathD || ""}
        fill={iconProps?.pathFill || ""}
        fillRule={iconProps?.pathfillRule || ""}
        clipRule={iconProps?.pathClipRule || ""}
      />
      {iconProps.pathD2 && (
        <path
          d={iconProps?.pathD2 || ""}
          fill={iconProps?.pathFill || ""}
          fillRule={iconProps?.pathfillRule || ""}
          clipRule={iconProps?.pathClipRule || ""}
        />
      )}
    </svg>
  );
}

export default IconSVG
