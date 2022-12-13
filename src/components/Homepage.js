import React, { useRef, useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useGlobal from '../hooks/useGlobal'
import BaseCoupon from './BaseCoupon'
import SlickCarousel from './SlickCarousel'
import SliderCoupon from './SliderCoupon'

const Homepage = () => {
  
  const [selectedBtn, setSelectedBtn] = useState(0)
  const navigate = useNavigate();
  const global = useGlobal();

  //scroll to top when page renders
  useEffect(() => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant',
      });
  }, [])

  return (
    <div className='container-fluid bg-light-grey py-5'>
      <div className='container'>
        <div className='row my-5' id="slider-categories-container-hp">
          <div className='col-xs-12 col-lg-8 test  col-xs'>
            <SlickCarousel slidesToShow={1} slides={
            [<SliderCoupon/>,
            <SliderCoupon/>,
            <SliderCoupon/>,
            <SliderCoupon/>
          ]
            }
            />
          </div>
          <div className='col-xs-12 col-lg-4  font-ss '>
            {global.categories.map((e,i) => {
              return <div className='d-flex my bg-white align-items-center ps-2 hover-text-accent text-mid-grey  border-bottom pe-3 square-shadow cursor-pointer' onClick={() => navigate(`/coupons/${e.name.toLowerCase()}`)}>
                        <i className={`${e.icon} icon-1 h5 mb-0`}/>
                        <div className='vl mx-1' />
                        <div className='d-flex justify-content-between flex-grow-1 hover-text-accent py-2 text-black h-100'>
                          <p className='ms-1  mb-0 f-10'>{e.name}</p>
                          <p className='mb-0 text-mid-grey'>{e.quantity}</p>
                        </div>
                     </div>
            })}
          </div>
        </div>
        <div className='bg-white square-shadow'>
            <div className='d-flex justify-content-between align-items-center border-bottom py-3'>
              <p className='ms-4 mb-0'><strong>Trending Brands</strong></p>
              <Link style={{textDecoration: "none"}} to="/brands"><p className='me-4 mb-0 text-black'><strong>All Brands </strong><i class="fa-solid fa-arrow-right"/></p></Link>
            </div>
            <div className='p-4'>
              <SlickCarousel arrows isResponsive slidesToShow={5} swipeToSlide slides={
                [
                  <div className='d-flex justify-content-center'>
                    <h6 className='border px-5 py-4 hover-border-accent cursor-pointer'  onClick={() => navigate("/brand1")}>LOGO</h6>
                  </div>,
                  <div className='d-flex justify-content-center'>
                    <h6 className='border px-5 py-4 hover-border-accent cursor-pointer'  onClick={() => navigate("/brand1")}>LOGO</h6>
                  </div>,
                  <div className='d-flex justify-content-center'>
                    <h6 className='border px-5 py-4 hover-border-accent cursor-pointer'  onClick={() => navigate("/brand1")}>LOGO</h6>
                  </div>,
                  <div className='d-flex justify-content-center' >
                    <h6 className='border px-5 py-4 hover-border-accent cursor-pointer '  onClick={() => navigate("/brand1")}>LOGO</h6>
                  </div>,
                  <div className='d-flex justify-content-center' >
                    <h6 className='border px-5 py-4 hover-border-accent cursor-pointer'  onClick={() => navigate("/brand1")}>LOGO</h6>
                  </div>,
                  <div className='d-flex justify-content-center'>
                    <h6 className='border px-5 py-4 hover-border-accent cursor-pointer' onClick={() => navigate("/brand1")}>LOGO</h6>
                  </div>,
                  <div className='d-flex justify-content-center' >
                    <h6 className='border px-5 py-4 hover-border-accent cursor-pointer' onClick={() => navigate("/brand1")}>LOGO</h6>
                  </div>,
                  <div className='d-flex justify-content-center' >
                    <h6 className='border px-5 py-4 hover-border-accent cursor-pointer' onClick={() => navigate("/brand1")}>LOGO</h6>
                  </div>,
                  <div className='d-flex justify-content-center' >
                    <h6 className='border px-5 py-4 hover-border-accent cursor-pointer' onClick={() => navigate("/brand1")}>LOGO</h6>
                  </div>,
                  <div className='d-flex justify-content-center' >
                    <h6 className='border px-5 py-4 hover-border-accent cursor-pointer' onClick={() => navigate("/brand1")}>LOGO</h6>
                  </div>,
                ]
              } />
            </div>
        </div>

          <div className='row mt-2'>
            <div className='col-xs-12 col-lg-8'>
              <div className='d-flex flex-wrap'>
                <Link to={"#"} style={{textDecoration: "none"}}  onClick={() => setSelectedBtn(0)}><div className={`text-black hover-text-accent hover-bg-white p-2 mb-1 ${selectedBtn == 0 ? "bg-white text-accent" : ""}`}><i class="fa-solid fa-fire me-1 "/> Popular Coupons</div></Link>
                <Link to={"#"} style={{textDecoration: "none"}}  onClick={() => setSelectedBtn(1)}><div className={`text-black hover-text-accent hover-bg-white p-2 mx-1 mb-1 ${selectedBtn == 1 ? "bg-white text-accent" : ""}`}><i class="fa-solid fa-star me-1"/> Latest Coupons</div></Link>
                <Link to={"#"} style={{textDecoration: "none"}}  onClick={() => setSelectedBtn(2)}><div className={`text-black hover-text-accent hover-bg-white p-2 mb-1 ${selectedBtn == 2 ? "bg-white text-accent" : ""}`}><i class="fa-solid fa-clock me-1"/> Ending Soon Coupons</div></Link>
              </div>
              {[...Array(8)].map((e,i) =>{
                return <BaseCoupon/>
              })}
            </div>
            <div className='col-xs-12 col-lg-4'>
              <div className='my-5 p-5 bg-accent d-flex justify-content-center'><br/><br/><br/><br/>1<br/><br/><br/><br/></div>
              <div className='my-5 p-5 square-shadow bg-white d-flex justify-content-center'>2</div>
              <div className='my-5 p-5 square-shadow bg-white d-flex justify-content-center'>3</div>

            </div>
          </div>
          
      </div>
    </div>
  )
}

export default Homepage