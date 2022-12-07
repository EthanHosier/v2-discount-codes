import React from 'react'
import SlickCarousel from './SlickCarousel'

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
  
  return (
    <div className='container-fluid bg-light-grey py-5'>
      <div className='container'>
        <div className='row' id="slider-categories-container-hp">
          <div className='col-8 test col-sm col-xs '>
            <SlickCarousel/>
          </div>
          <div className='col-4 col-sm col-xs font-ss '>
            {CATEGORIES.map((e,i) => {
              return <div className='d-flex my bg-white align-items-center ps-2 hover-text-accent text-mid-grey py-2 border pe-3 square-shadow'>
                        <i className={`${e.icon} icon-1 h5 mb-0`}/>
                        <div className='vl mx-1' />
                        <div className='d-flex justify-content-between flex-grow-1'>
                          <p className='not-hover-text-black ms-1 border-primary border-left text-blacks mb-0 f-10'>{e.name}</p>
                          <p className='mb-0'>{e.quantity}</p>
                        </div>
                     </div>
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage