import React, { useEffect, useState } from 'react'
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
const CategoriesPage = () => {
  const [buttonHovered, setButtonHovered] = useState(-1)

  useEffect(() =>{
    console.log(buttonHovered)
  },[buttonHovered])

  return (
    <>
      <div className='container-fluid bg-light-grey py-4'>
        <div className='container d-flex flex-wrap justify-content-center py-5 mw-1000'>
          {CATEGORIES.map((e,i) => {
            return <div className={`square-shadow m-4 py-4  small-rounded d-flex flex-column align-items-center justify-content-center w-150 cursor-pointer ${buttonHovered == i? "bg-accent" : "bg-white"}`} onMouseEnter={() => setButtonHovered(i)} onMouseLeave={() => setButtonHovered(-1)}>
                    <i className={`${e.icon} mb-3 font-15 ${buttonHovered == i? "text-white" : "text-accent"}`}></i>
                    <p className={`${buttonHovered == i? "text-white" : "text-black"} mb-0`}><strong>{e.name}</strong></p>
                  </div>
          })}
        </div>
      </div>
    </>
  )
}

export default CategoriesPage