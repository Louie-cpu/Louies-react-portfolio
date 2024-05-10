import React from "react"
import { HiArrowNarrowRight } from "react-icons/hi"

const Home = () => {
  return (
    <div name="home " className="w-full h-screen bg-black">
      {/* container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-red-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-white">
          Luis Moreno
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-white">
          I am a Full Stack Developer
        </h2>
        <p className="text-gray-300 py-4 max-w-700px">
          I am a full stack developer dedicated to building and designing
          excellent digital experiences. Currently building out a capstone
          project from scratch with my LEARN Academy Class
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-red-600 hover:border-red-600">
            {" "}
            View work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
