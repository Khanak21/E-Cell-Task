import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
        <ul className='navbar'>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/">Grid</Link></li>
            <li className='linkedin'><a href="https://www.linkedin.com/in/khanak-patwari/">LinkedIn</a></li>
        </ul>
    </div>
  )
}

export default Navbar