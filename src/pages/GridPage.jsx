import React from 'react'
import { useState } from 'react';
import logo from '../images/logo.png'
import Grid from '../components/Grid/Grid'
import './GridPage.css'
import { Link } from 'react-router-dom'
export const GridPage = () => {
    const [open,setOpen] = useState(false)
    const handleClick = ()=>{
        setOpen(!open)
        const element = document.getElementById('header');
        if(!open)element.classList.add('headerclose');
        else element.classList.remove('headerclose');
    }
    
  return (
    <div>
    <header className="header" id="header">
        <input type="checkbox" id="check"></input>
        <label htmlFor="check" className="icons">
        <i className='bx bx-menu' id="menu-icon" onClick={handleClick}></i>
        <i className='bx bx-x' id="close-icon" onClick={handleClick}></i>
        </label>
    <nav className='navbar'>
      <Link to="/home">Home</Link>
      <Link to="/">Grid</Link>
      <a href="https://www.linkedin.com/in/khanak-patwari/">LinkedIn</a>
    </nav>
    </header>
    <div className='three flex  lg:flex-row my-4 p-2 justify-center'>
      <div className='rect colorbox my-4 mx-auto md:mt-4 md:mb-0 md:mx-4 lg:mx-1 h-20'></div>
      <div className='bottom md:mt-0 flex flex-col-reverse lg:flex-row md:items-center md:flex'>
        <img src={logo} className=' logo my-4 md:mt-1 lg:mx-6 lg:my-4 flex-grow'></img>
        <Grid className=" md:mt-1 flex-grow"/>
      </div>
    </div>
    </div>
  )
}
