import React from 'react'

const BrandsPage = () => {
  return (
    <div className='container-fluid bg-light-grey py-4'>
        <div className='container d-flex flex-wrap justify-content-center py-5 mw-1000'>
          {[...Array(10)].map((e,i) => {
            return <div className='d-flex flex-column align-items-center justify-content-center mx-2 my-4 cursor-pointer'>
                      <div className='square-shadow my-2 p-3 small-rounded  bg-white w-100'>
                        <div className='p-5 bg-accent'>Logo {i}</div>
                      </div>

                        <div className='square-shadow bg-white w-100 text-center py-2'>Brand {i}</div>
                    </div>
                  
          })}
        </div>
      </div>
  )
}

export default BrandsPage