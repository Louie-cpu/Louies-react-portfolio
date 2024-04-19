import React from "react"
import Lm from "../assets/Lm.png"
import { FaBars, FaTimes } from "react-icons/fa"

const Navbar = () => {
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img src={Lm} alt="Lm image" style={{ width: "50px" }} />
      </div>
      {/* menu  */}
      <div className="flex">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>
      </div>

      {/*Hamburger */}
      <div className="hidden">
        <FaBars />
      </div>

      {/*Mobile menu*/}
      <div>
        <ul className="hidden">
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>
      </div>

      {/* social icons */}
      <div></div>
    </div>
  )
}

export default Navbar
