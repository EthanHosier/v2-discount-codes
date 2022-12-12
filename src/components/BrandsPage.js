import React from 'react'
import { useNavigate } from 'react-router-dom'

const BrandsPage = () => {
  const navigate = useNavigate();
  return (
    <div className='container-fluid bg-light-grey py-4'>
        <div className='container d-flex flex-wrap justify-content-center py-5 mw-1000'>
          {[...Array(40)].map((e,i) => {
            return <div className='d-flex flex-column align-items-center justify-content-center mx-2 my-4 cursor-pointer' onClick={() => navigate("/brand1")}>
                      <div className='square-shadow my-2 p-3 small-rounded  bg-white w-100'>
                        <div className='p-5 bg-accent border'>Logo</div>
                      </div>

                        <div className='square-shadow bg-white w-100 text-center py-2'>[BRAND]</div>
                    </div>
                  
          })}
        </div>
      </div>
  )
}

export default BrandsPage