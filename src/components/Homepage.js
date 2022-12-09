import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import BaseCoupon from './BaseCoupon'
import SlickCarousel from './SlickCarousel'
import SliderCoupon from './SliderCoupon'

const CATEGORIES = [
  {
    name: "Food" ,
    icon: "fa-solid fa-burger",
    quantity: 204,
  },

  {
    name: "Holiday" ,
    icon: "fa-solid fa-plane-departure",
    quantity: 102,
  },

  {
    name: "Leisure" ,
    icon: "fa-solid fa-masks-theater",
    quantity: 305,
  },

  {
    name: "Fashion" ,
    icon: "fa-solid fa-bag-shopping",
    quantity: 131,
  },


  {
    name: "Beauty" ,
    icon: "fa-solid fa-heart",
    quantity: 441,
  },

  {
    name: "Electronics" ,
    icon: "fa-solid fa-plug",
    quantity: 227,
  },

  {
    name: "Home" ,
    icon: "fa-solid fa-house",
    quantity: 290,
  },
  
  {
    name: "Gifts" ,
    icon: "fa-solid fa-gift",
    quantity: 100,
  },

  {
    name: "Automotive" ,
    icon: "fa-solid fa-car-side",
    quantity: 87,
  },

  {
    name: "Education" ,
    icon: "fa-solid fa-school",
    quantity: 132,
  },

  {
    name: "Child" ,
    icon: "fa-solid fa-child-reaching",
    quantity: 242,
  },

  {
    name: "Finance" ,
    icon: "fa-solid fa-money-check-dollar",
    quantity: 111,
  },
]

const Homepage = () => {
  
  const [selectedBtn, setSelectedBtn] = useState(0)

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
            {CATEGORIES.map((e,i) => {
              return <div className='d-flex my bg-white align-items-center ps-2 hover-text-accent text-mid-grey  border-bottom pe-3 square-shadow cursor-pointer'>
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
              <p className='ms-4 mb-0'><strong>Trending Stores</strong></p>
              <p className='me-4 mb-0'><strong>All Stores </strong><i class="fa-solid fa-arrow-right"/></p>
            </div>
            <div className='p-4'>
              <SlickCarousel arrows isResponsive slidesToShow={5} slides={
                [
                  <div className='p-4'>
                    <h6>1</h6>
                  </div>,
                  <div className='p-4'>
                    <h6>2</h6>
                  </div>,
                  <div className='p-4'>
                    <h6>3</h6>
                  </div>,
                  <div className='p-4'>
                    <h6>4</h6>
                  </div>,
                  <div className='p-4'>
                    <h6>5</h6>
                  </div>,
                  <div className='p-4'>
                    <h6>6</h6>
                  </div>,
                  <div className='p-4'>
                    <h6>7</h6>
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
              <BaseCoupon/>
              <BaseCoupon/>
              <BaseCoupon/>
              <BaseCoupon/>
              <BaseCoupon/>
              <BaseCoupon/>
              <BaseCoupon/>
              <BaseCoupon/>
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