import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
  
      <header className="header">
        <input type="checkbox" id="check"></input>
        <label htmlFor="check" className="icons">
        <i className='bx bx-menu' id="menu-icon"></i>
        <i className='bx bx-x' id="close-icon"></i>
        </label>
      <nav className='navbar'>
      <Link to="/home">Home</Link>
      <Link to="/">Grid</Link>
      <a href="https://www.linkedin.com/in/khanak-patwari/">LinkedIn</a>
    </nav>
      </header>
  

  )
}

export default Navbar