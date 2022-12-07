import React from 'react'
import Slider from "react-slick";

const SlickCarousel = () => {
  
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        //dots: false,
      };
  
      return (
        <div className='mb-5 square-shadow' >
          <Slider {...settings}>
            <div className='bg-light h-100 ar-1p5'>
              <h3>1</h3>
            </div>
            <div className='bg-secondary ar-1p5'>
              <h3>2</h3>
            </div>
            
          </Slider>
        </div>
      );
}



export default SlickCarousel