import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    const queryRef = useRef()
    const [query,setQuery] = useState("")

    return (
        <>
            <div className='container-fluid bg-custom-black'>
                <div className='container'>
                    <div className='row py-3 '>
                        <div className='col d-flex py-2'>
                            <img src='https://demo.spoonthemes.net/themes/couponis/wp-content/uploads/2017/09/logo.png'/>
                        </div>
                        
                        <div className='d-flex justify-content-end rounded col py-2'>
                            <input className='h-100 border-none p-2 small-rounded-start' 
                                type="text"
                                id="search-query"
                                ref={queryRef}
                                autoComplete="on"
                                onChange={(e)=> setQuery(e.target.value)}
                                value={query}
                                placeholder="I want coupons for..."
                                />
                            <button className='bg-accent text-white border-none h-100 small-rounded-end' id="search-btn">SEARCH</button>

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
                            <Link style={{textDecoration: "none"}} to="/"><span class="nav-link text-accent font-weight fw-500 me-1 me-sm-0">Home</span></Link>
                            </li>
                            <li class="nav-item">
                            <Link style={{textDecoration: "none"}} to="/coupons"><span class="nav-link active hover-text-accent font-weight fw-500 me-1 me-sm-0">Coupons</span></Link>
                            </li>
                            <li class="nav-item">
                            <Link style={{textDecoration: "none"}} to="/brands"><span class="nav-link active hover-text-accent font-weight fw-500 me-1 me-sm-0">Brands</span></Link>
                            </li>
                            <li class="nav-item">
                            <Link style={{textDecoration: "none"}} to="/categories"><span class="nav-link active hover-text-accent font-weight fw-500 me-1 me-sm-0">Categories</span></Link>
                            </li>
                        </ul>  
                        </div>
                    </div>
                    <div className='d-flex align-items-center text-accent'>
                        <p className='mb-0 mt-0 me-2 text-nowrap'>Contact Us</p>
                        <i className="fa-regular fa-comment"/>
                     </div>
                </div>
            </nav>
            
        </>
    )
}

export default Header