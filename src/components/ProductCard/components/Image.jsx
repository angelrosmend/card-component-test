import React, { Fragment, useState } from 'react'
import Slider from "react-slick";
import { arrowBack, arrowNext } from '../../Icon_svg';
import { ArrowSlider} from '../../SliderArrows/SliderArrows';
import SlideIndicator from './SlideIndicator';

function CardImage({images}) {

  const [currentSlide, setCurrentSlide] = useState(0)

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <ArrowSlider icon={arrowBack} setCurrentSlide={setCurrentSlide}/>,
        nextArrow:<ArrowSlider  icon={arrowNext} setCurrentSlide={setCurrentSlide}/>,
      };

      return (
        <Fragment>
        <Slider {...settings}>
            {images && images.map((imageUrl, index)=>{
                return <img src={imageUrl} key={index}/>
            })}
        </Slider>
        <SlideIndicator image_qty={images.length} style={{width: `${100 / images.length || 1 }%`, transform:`translate(${currentSlide > 0 ? (343 / images.length) * currentSlide : 0 }px)`}}/>
        </Fragment>
  )
}

export default CardImage