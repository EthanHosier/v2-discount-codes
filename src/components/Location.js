import React from 'react'
import { Link } from 'react-router-dom'

const Location = ({location}) => {
  return (
    <div className='row square-shadow py-3 px-5'>
        <div className='col'>
            <h4>{location}</h4>
        </div>
        <div className='col d-flex justify-content-end font-ss'>
            <p><Link to="/" style={{textDecoration: "none"}}> <span className='text-black hover-text-accent'>Home</span></Link> / {location}</p>
        </div>
    </div>
  )
}

export default Location