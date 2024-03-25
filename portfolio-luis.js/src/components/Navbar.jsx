import React from 'react'
import Lm from '../assets/Lm.png'
import { FaBars, FaTimes } from 'react-icons/fa'


const Navbar = () => {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div>
          <img src={Lm} alt="Lm image" style={{width:'50px'}}/>
        </div>
        <div>
          <ul>
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Work</li>
          <li>Contact</li>
          </ul>
            
        </div>
{/*Hamburger */}
<div></div>
{/*Mobile menu*/}
    </div>
  )
}

export default Navbar