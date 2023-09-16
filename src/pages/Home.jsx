import React from 'react'
import { useState } from 'react';
import MYPIC from '../images/MYPIC.jpg'
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { Engine } from "tsparticles-engine";
import { loadFirePreset } from "tsparticles-preset-fire";
import { Link } from 'react-router-dom'
import './Home.css'
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.

const Home= () => {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // await loadFirePreset(engine);
        
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);
    const options = {
        preset: "fire",
      };

    return (
        <div>
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
         <div className='wrapper'>
         {/* <Particles options={options} init={particlesInit} /> */}
         <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "#ffffff",
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: false,
                    },
                    modes: {
                    
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 100,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#000000",
                    },
                    links: {
                        color: "#000000",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 1,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
        />
         <div className='cont flex justify-center items-center h-screen'>
         <img src={MYPIC} className='img h-[50vh] mx-8 rounded-lg z-100 relative'></img>
         <div className='relative'>
             <div className='border-s-4 p-2 m-2 text-4xl font-md z-10 name'>Name: Khanak Patwari</div>
             <div className='border-s-4 p-2 m-2 text-4xl font-md z-10 reg'>Registration Number:20223124</div>
             <div className='butcont flex justify-center'><button className='p-2 m-2 font-md z-10 text-white bg-black rounded-3xl'>&lt;Instagram_handle_not_found!/&gt;</button></div>

         </div>
         </div>
         </div>
     </div>

    );
};
export default Home