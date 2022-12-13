import Slider from "react-slick";
import { useState, useEffect } from "react";

const SlickCarousel = ({slides,isResponsive, slidesToShow, arrows, swipeToSlide}) => {
  
  const [slider,setSlider] = useState();

    useEffect(()=>{
        if(!slider) return
        slider.slickPlay();
    }, [slider])

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: swipeToSlide? 2000: 5000,
        slidesToShow: slidesToShow,
        slidesToScroll: swipeToSlide? 1:slidesToShow,
        swipeToSlide: swipeToSlide,
        arrows: false,
        responsive: isResponsive && [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

      
  
      return (
        <div className={`${slidesToShow == 1? "mb-5 square-shadow" : ""}`} >
            <Slider ref={s => setSlider(s)} {...settings}>
              {slides}
            </Slider>
        </div>
      );
}



export default SlickCarousel