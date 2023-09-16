import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import MYPIC from '../images/MYPIC.jpg'
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { Engine } from "tsparticles-engine";
import { loadFirePreset } from "tsparticles-preset-fire";

//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.

const Home= () => {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        await loadFirePreset(engine);
        
        // await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);
    const options = {
        preset: "fire",
      };

    return (
        <div>
         <Navbar/>
         <div className='wrapper'>
         <Particles options={options} init={particlesInit} />
         <div className='flex'>
         <img src={MYPIC} className='h-96 w-96 mx-8 my-8 rounded-lg z-100 relative'></img>
         <div className='my-8 relative'>
             <div className='border-s-4 p-2 m-2 text-4xl font-md z-10'>Name: Khanak Patwari</div>
             <div className='border-s-4 p-2 m-2 text-4xl font-md z-10'>Registration Number:20223124</div>
         </div>
         </div>
         </div>
     </div>

    );
};
export default Home