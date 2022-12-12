import React from 'react'

const CategoryTitle = ({category}) => {
  return (
    <div className='square-shadow d-flex'>
        <div className='bg-accent d-flex justify-content-center align-items-center'>
            <i className={`${category.icon} text-white p-5 display-2`}/>
        </div>
        <div className='bg-white p-4 flex-grow-1 d-flex flex-column justify-content-center'>
            <h3><strong>{category.name} ({category.quantity})</strong></h3>
            <p className='mb-0'>Use the following discount codes and special offers for significant savings on your {category.name.toLowerCase()} purchases!</p>
        </div>
    </div>
  )
}

export default CategoryTitle