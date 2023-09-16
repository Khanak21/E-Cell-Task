import React from 'react'
import Navbar from '../components/Navbar/Navbar';
import logo from '../images/logo.png'
import Grid from '../components/Grid/Grid'
import './GridPage.css'
export const GridPage = () => {
  return (
    <div>
    <Navbar/>
    <div className='three flex flex-col-reverse md:flex-col lg:flex-row my-20 p-2 justify-center'>
      <div className='rect colorbox my-4 md:mt-4 md:mb-0 md:mx-4 lg:mx-4 h-20'></div>
      <div className='bottom md:mt-0 flex flex-col-reverse lg:flex-row md:items-center md:flex'>
        <img src={logo} className=' logo my-4 md:mt-1 lg:mx-4 lg:my-4 flex-grow'></img>
        <Grid className=" md:mt-1 flex-grow"/>
      </div>
    </div>
    </div>
  )
}
