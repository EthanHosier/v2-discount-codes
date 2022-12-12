import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import { useLocation } from 'react-router-dom'
import Location from './Location'
import Footer from './Footer'

const LOCATION_PAGES = ["categories", "brands"] //pages where should show location bar
const Layout = () => {

  const location = useLocation();
  

  return (
    <div>
        <header className='square-shadow'>
          <Header/>
          {LOCATION_PAGES.includes(location.pathname.slice(1)) && <Location location={location.pathname.slice(1)}/>}
        </header>

        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout