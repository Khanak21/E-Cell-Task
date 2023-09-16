import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import MYPIC from '../images/MYPIC.jpg'
const Home = () => {
  return (
    <div>
        <Navbar/>
        <div className='flex'>
        <img src={MYPIC} className='h-96 w-96 mx-8 my-8 rounded-lg'></img>
        <div className='my-8'>
            <div className='border-s-4 p-2 m-2 text-4xl font-md'>Name: Khanak Patwari</div>
            <div className='border-s-4 p-2 m-2 text-4xl font-md'>Registration Number:20223124</div>

        </div>
        </div>
    </div>
  )
}

export default Home