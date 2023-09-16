import React from 'react'
import Navbar from '../components/Navbar/Navbar';
import logo from '../images/logo.png'
import Grid from '../components/Grid/Grid'
import './GridPage.css'
export const GridPage = () => {
  return (
    <div>
    <Navbar/>
      <div className='container'>
      <div className='colorbox'></div>
      <img src={logo} className='logo'></img>
      <Grid/>
      </div>
    </div>
  )
}
