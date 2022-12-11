import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import { useLocation } from 'react-router-dom'
import Location from './Location'

const LOCATION_PAGES = ["categories", "brands"] //pages where should show location bar
const Layout = () => {

  const location = useLocation();
  useEffect(()=>{
    console.log(location.pathname.slice(1))
  }, [location])
  
  return (
    <div>
        <header className='square-shadow'>
          <Header/>
          {LOCATION_PAGES.includes(location.pathname.slice(1)) && <Location location={location.pathname.slice(1)}/>}
        </header>

        <Outlet/>
        
    </div>
  )
}

export default Layout