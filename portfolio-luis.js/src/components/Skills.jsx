import React from "react"
import css from "../assets/css.png"
import postgresql from "../assets/postgresql.png"
import html from "../assets/html.png"
import js from "../assets/javascript.png"
import rails from "../assets/rails.png"
import reactImg from "../assets/react.png"
import bootStrap from "../assets/bootstrap.png"
import tailwind from "../assets/tailwind.png"

const Skills = () => {
  return (
    <div name="skills" className="bg-black text-gray-300">
      {/* container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-red-700">
            Skills
          </p>
          <p className="py-4">Tools I have utilized</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={css} alt="CSS icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={html} alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={js} alt="Javascript icon" />
            <p className="my-4">JAVASCRIPT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-50 mx-auto" src={rails} alt="Rails icon" />
            <p className="my-4">RAILS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={reactImg} alt="React icon" />
            <p className="my-4">REACT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src={postgresql}
              alt="postgres icon"
            />
            <p className="my-4">PostgreSQL</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src={bootStrap}
              alt="bootstrap icon"
            />
            <p className="my-4">BOOTSTRAP</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={tailwind} alt="Tailwind icon" />
            <p className="my-4">TAILWIND</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
