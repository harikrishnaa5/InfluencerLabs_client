import React from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='navbar d-flex justify-content-end'>
        
        <Link to="/" className='btn btn-sm btn-info px-4'>Home</Link>
        <Link to="/student" className='btn btn-sm btn-info px-4 ms-3'>Student</Link>
        <Link to="/teacher" className='btn btn-sm btn-info px-4 ms-3'>Teacher</Link>
        
    </div>
  )
}

export default Navbar