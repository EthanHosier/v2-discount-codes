import React from 'react'

const SliderCoupon = () => {
  return (
    <div>
        <div className='p-5 bg-accent d-flex justify-content-center align-items-center w-100 cursor-pointer'><br/><br/><br/>PROMOTION<br/><br/><br/></div>
        <div className='bg-white row p-3'>
            <div className="overflow-hidden col-xs-12 col-sm-10">
                <h6 className='small-rounded sale-badge px-1 d-flex justify-content-center'>Online Sale</h6>
                <h3 className='text-overflow-elipses hover-text-accent cursor-pointer mb-sm-4'>Title Eget Lorem 10% Dolor Sed Viverra Ipsum Nunc Aliquet</h3>
                
                <div className='d-flex flex-wrap justify-content-between'>
                    <div className='text-mid-grey text-center coupon-date '> <i class="fa-solid fa-tags"/> Shop Name</div>
                    <div className='text-mid-grey text-center coupon-date'> <i class="fa-solid fa-clock"/> January 19, 2023</div>
                </div>
            </div>
            <div className='d-flex justify-content-center align-items-center col-xs-12 col-sm-2'>
                <button className='btn btn-warning w-100'>Get Deal</button>
            </div>
        </div>
    </div>
  )
}

export default SliderCoupon