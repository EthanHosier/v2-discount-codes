import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Footer = () => {
    const location = useLocation();
  return (
        <footer>
            
            { location.pathname != "/contact-us" &&
            <div className='d-flex flex-column justify-content-center align-items-center py-5 bg-stripes'>
                <i className="fa-solid fa-tags text-accent display-1 m-3"/>
                <h4>Want to promote your business? </h4>
                <Link style={{textDecoration: "none"}} to="/contact-us"><h5 className='text-accent '>Submit Coupons</h5></Link>
            </div>
            }
            <div className='bg-custom-black d-flex justify-content-center py-4'>
                <div className='row text-mid-grey '>
                    <div className='col-lg col-xs-1 text-center text-nowrap'><span>© Voucher Frog</span></div>
                    <div className='col-lg col-xs-1 d-flex justify-content-center'>
                        <Link style={{textDecoration: "none"}} to="/"><p className='text-mid-grey me-2 mb-0'>Home</p></Link>
                        <Link style={{textDecoration: "none"}} to="/coupons"><p className='text-mid-grey mx-2 mb-0' >Coupons</p></Link>
                        <Link style={{textDecoration: "none"}} to="/brands"><p className='text-mid-grey mx-2 mb-0'>Brands</p></Link>
                        <Link style={{textDecoration: "none"}} to="/categories"><p className='text-mid-grey mx-2 mb-0'>Categories</p></Link>
                        <Link style={{textDecoration: "none"}} to="/contact-us"><p className='text-mid-grey ms-2 text-nowrap mb-0'>Contact Us</p></Link>

                    </div>
                    <div className='col d-flex justify-content-center'>
                        <Link style={{textDecoration: "none"}} to="/terms&conditions"><p className='text-mid-grey me-2 text-nowrap mb-0'>Terms & Conditions</p></Link>
                        <Link style={{textDecoration: "none"}} to="/privacy-policy"><p className='text-mid-grey ms-2 text-nowrap mb-0'>Privacy Policy</p></Link>
                    </div>
                </div>
            </div>
            
        </footer>
    )
}

export default Footer