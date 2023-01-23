import { useEffect } from "react";
import IconSVG from "../Icon_svg/IconSVG";

export function ArrowSlider(props) {
    const { style, onClick,className, currentSlide, setCurrentSlide, icon } = props;
    
    useEffect(()=>{
      setCurrentSlide(currentSlide)
    },[currentSlide])

    return (
        <IconSVG
        iconProps={icon}
        onClick={onClick}
        style={{...style}}
        className={className}
      />
    )
}