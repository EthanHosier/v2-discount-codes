import React, { useRef, useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import frogLogo from '../rsc/imageedit_8_9571773753.png'


const Header = () => {
    const queryRef = useRef()
    const [query,setQuery] = useState("")
    const navigate = useNavigate();
    const location = useLocation();

    const onSearch = () =>{
        navigate(`/coupons?q=${query}`)
        setQuery("")
    }

    return (
        <>
            <div className='container-fluid bg-custom-black'>
                <div className='container'>
                    <div className='row py-3 '>
                        <div className='col'>
                            <Link style={{textDecoration: "none", width: "fit-content"}} to="/">
                                <div className='d-flex justify-content-center justify-content-lg-start'>
                                    <img src={frogLogo} id="frog-logo-header"/>
                                    <div className='m-0 d-flex align-items-center text-nowrap'>
                                        <h3 className='mb-0 text-accent text-helvetica'>Voucher <span className='text-warning'>Frog</span></h3>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className='d-flex justify-content-center justify-content-lg-end rounded col py-2'>
                            <input className='h-100 border-none p-2 small-rounded-start' 
                                type="text"
                                id="search-query"
                                ref={queryRef}
                                autoComplete="on"
                                onChange={(e)=> setQuery(e.target.value)}
                                value={query}
                                placeholder="I want coupons for..."
                                />
                            <button className='bg-accent text-white border-none h-100 small-rounded-end' id="search-btn" disabled={!query} onClick={onSearch}>SEARCH</button>

                        </div>
                    </div>
                </div>
            </div>
            
            

            <nav class=" bg-white">
                <div className='container d-flex'>
                    <div class="navbar navbar-expand-sm container-fluid d-flex ">
                        <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fa-solid fa-bars text-accent display-5"/>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb ">
                            <li class="nav-item">
                            <Link style={{textDecoration: "none"}} to="/"><span class={`nav-link font-weight fw-500 me-1 me-sm-0 ${location.pathname == "/" ? "text-accent" : "active"}`}>Home</span></Link>
                            </li>
                            <li class="nav-item">
                            <Link style={{textDecoration: "none"}} to="/coupons"><span class={`nav-link hover-text-accent font-weight fw-500 me-1 me-sm-0 ${location.pathname == "/coupons" ? "text-accent" : "active"}`}>Coupons</span></Link>
                            </li>
                            <li class="nav-item">
                            <Link style={{textDecoration: "none"}} to="/brands"><span class={`nav-link hover-text-accent font-weight fw-500 me-1 me-sm-0 ${location.pathname == "/brands" ? "text-accent" : "active"}`}>Brands</span></Link>
                            </li>
                            <li class="nav-item">
                            <Link style={{textDecoration: "none"}} to="/categories"><span class={`nav-link hover-text-accent font-weight fw-500 me-1 me-sm-0 ${location.pathname == "/categories" ? "text-accent" : "active"}`}>Categories</span></Link>
                            </li>
                        </ul>  
                        </div>
                    </div>
                    <div className='d-flex align-items-start pt-3'>
                        <Link style={{textDecoration: "none"}} to="/contact-us"><p className='mb-0 mt-0 me-2 text-nowrap text-accent'>Contact Us <i className="fa-regular fa-comment text-accebt"/></p></Link>
                     </div>
                </div>
            </nav>
            
        </>
    )
}

export default Header