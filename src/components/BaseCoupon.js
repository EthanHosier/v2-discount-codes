import React from 'react'

const BaseCoupon = () => {
  return (
    <div className='my-3 container bg-white square-shadow p-4'>
        <div className='d-lg-none d-flex justify-content-end'>
            <p className='text-custom-black bg-label-grey text-center coupon-date small-rounded'> <i class="fa-regular fa-calendar"/> January 19, 2004</p>
        </div>
        <div className='row d-flex justify-content-center align-items-center'>
            <div className='col-lg-3 p-5 border cursor-pointer mb-sm-3 mb-lg-0 text-center d-none d-lg-block hover-border-accent'>LOGO</div>
            <div className='col-lg-3 p-5 border-bottom cursor-pointer mb-sm-3 mb-lg-0 text-center d-xs-block d-lg-none hover-border-accent'>LOGO</div>

            <div className='col-lg-6 d-flex flex-column justify-content-center overflow-hidden mb-sm-3 mb-lg-0 '>
                <h5 className='text-overflow-elipses hover-text-accent cursor-pointer mb-sm-4'>Title Eget Lorem 10% Dolor Sed Viverra Ipsum Nunc Aliquet</h5>
                <p id="coupon-description" className='coupon-description mb-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua... <span className='text-accent cursor-pointer'>Read More</span></p>
            </div>
            
            <div className='col-lg-3 d-flex flex-column align-items-end'>
                <p className='text-mid-grey text-center d-none d-lg-block coupon-date'> <i class="fa-regular fa-calendar"/> January 19, 2004</p>
                <button className='p-3 btn btn-warning w-100'>Get Code</button>
            </div>
        </div>
    </div>
  )
}

export default BaseCoupon