import React, { useState } from "react"
import lM from "../assets/lM.png"
import resume from "../assets/resume.pdf"
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi"
import { BsFillPersonLinesFill } from "react-icons/bs"
import { Link } from "react-scroll"

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center align-right px-4 bg-red-700  text-gray-300">
      <div>
        <img
          src={lM}
          alt="Lm logo"
          style={{ width: "50px", borderRadius: "50%" }}
        />
      </div>

      {/* menu  */}
      <div className="flex justify-end w-full">
        <ul className="hidden md:flex">
          <li>
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="hover:text-black hover:text-black px-4 py-2 rounded-lg"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="hover:text-black hover:text-black px-4 py-2 rounded-lg"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              className="hover:text-black hover:text-black px-4 py-2 rounded-lg"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="work"
              smooth={true}
              duration={500}
              className="hover:text-black hover:text-black px-4 py-2 rounded-lg"
            >
              Work
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="hover:text-black hover:text-black px-4 py-2 rounded-lg"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/*Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/*Mobile menu*/}
      <div>
        <ul
          className={
            !nav
              ? "hidden"
              : "absolute top-0 left-0 w-full h-screen bg-black flex flex-col justify-center items-center"
          }
        >
          <li className="py-6 text-4xl">
            <Link
              onClick={handleClick}
              to="home"
              smooth={true}
              duration={500}
              className="hover:text-white hover:text-red-700 px-4 py-2 rounded-lg"
            >
              Home
            </Link>
          </li>
          <li className="py-6 text-4xl">
            {" "}
            <Link
              onClick={handleClick}
              to="about"
              smooth={true}
              duration={500}
              className="hover:text-white hover:text-red-700 px-4 py-2 rounded-lg"
            >
              About
            </Link>
          </li>
          <li className="py-6 text-4xl">
            {" "}
            <Link
              onClick={handleClick}
              to="skills"
              smooth={true}
              duration={500}
              className="hover:text-white hover:text-red-700 px-4 py-2 rounded-lg"
            >
              Skills
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link
              onClick={handleClick}
              to="work"
              smooth={true}
              duration={500}
              className="hover:text-white hover:text-red-700 px-4 py-2 rounded-lg"
            >
              Work
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link
              onClick={handleClick}
              to="contact"
              smooth={true}
              duration={500}
              className="hover:text-white hover:text-red-700 px-4 py-2 rounded-lg"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300 "
              href="https://www.linkedin.com/in/luis-u14-moreno/"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300 "
              href="https://github.com/Louie-cpu"
              target="_blank"
              rel="noreferrer"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a
              class="flex justify-between items-center w-full text-gray-300"
              href="https://luis.u.m779@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Email <HiOutlineMail size="30" />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-300 "
              href={resume}
              target="_blank"
              rel="noreferrer"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
