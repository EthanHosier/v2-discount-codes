import React from 'react'
import { Link } from 'react-router-dom'

const Location = ({location}) => {
  const title = location.substring(0, 1).toUpperCase() + location.substring(1)
  return (
    
      <div className='container-fluid square-shadow py-3 px-5 border-top border-mid-grey d-flex justify-content-center'>
        <div className='container row'>
          <div className='col'>
              <h4>{title}</h4>
          </div>
          <div className='col d-flex justify-content-end font-ss'>
              <p><Link to="/" style={{textDecoration: "none"}}> <span className='text-black hover-text-accent'>Home</span></Link> / {title}</p>
          </div>
        </div>
      </div>
  )
}

export default Location