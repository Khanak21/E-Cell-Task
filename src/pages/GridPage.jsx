import React from 'react'
import Navbar from '../components/Navbar/Navbar';
import logo from '../images/logo.png'
import Grid from '../components/Grid/Grid'
import './GridPage.css'
export const GridPage = () => {
  return (
    <div>
    <Navbar/>
      <div className='flex mx-10 my-10 p-2 justify-center'>
      <div className='colorbox mx-4 h-20'></div>
      <img src={logo} className='logo mx-4'></img>
      <Grid/>
      </div>
    </div>
  )
}
