import React from 'react'
import Slider from "react-slick";
import { arrowBack, arrowNext } from '../../Icon_svg';
import IconSVG from '../../Icon_svg/IconSVG';

function CardImage({images}) {

    function PrevArrow(props) {
        const { style, onClick, className } = props;
        return (
            <IconSVG
            style={{...style}}
            iconProps={arrowBack}
            onClick={onClick}
            className={className}
          />
        )
    }

    function NextArrow(props) {
        const { style, onClick,className } = props;
        return (
            <IconSVG
            iconProps={arrowNext}
            onClick={onClick}
            style={{...style}}
            className={className}
          />
        )
    }


    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <PrevArrow/>,
        nextArrow:<NextArrow/>,
      };

      return (
        <Slider {...settings}>
            {images && images.map((imageUrl, index)=>{
                return <img src={imageUrl} key={index}/>
            })}
        </Slider>
  )
}

export default CardImage