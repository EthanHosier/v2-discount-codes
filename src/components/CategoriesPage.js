import React, {useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useGlobal from '../hooks/useGlobal'

const CategoriesPage = () => {
  const [buttonHovered, setButtonHovered] = useState(-1)
  const navigate = useNavigate()
  const global = useGlobal()

  return (
    <>
      <div className='container-fluid bg-light-grey py-4'>
        <div className='container d-flex flex-wrap justify-content-center py-5 mw-1000'>
          {global.categories.map((e,i) => {
            return <div className={`square-shadow m-4 py-4  small-rounded d-flex flex-column align-items-center justify-content-center w-150 cursor-pointer ${buttonHovered == i? "bg-accent" : "bg-white"}`} onMouseEnter={() => setButtonHovered(i)} onMouseLeave={() => setButtonHovered(-1)} onClick={() => navigate(`/coupons/${e.name.toLowerCase()}`)}>
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