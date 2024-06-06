import React from "react"
import work1 from "../assets/work1.png"
import work2 from "../assets/work2.png"
import work3 from "../assets/work3.png"

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-black">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-red-700">
            Work
          </p>
          <p className="py-6">// Check out some of my recent work</p>
        </div>
        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${work1})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effects */}
            <div className="opacity-0 group-hover:opacity-100 p-4 text-center">
              <span className="text-2xl font-bold text-white tracking-wider">
                Flat Finder App
              </span>
              <p className="pt-2">
                A web app to find apartments. Built with React and Rails.
              </p>
              <div className="pt-8">
                <a
                  href="https://github.com/learn-academy-2024-alpha/apartment-app-frontend-matt-amir-and-louie-apt-app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Frontend
                  </button>
                </a>
                <a
                  href="https://github.com/learn-academy-2024-alpha/apartment-app-backend-matt-amir-and-louie-apt-app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Backend
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${work2})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effects */}
            <div className="opacity-0 group-hover:opacity-100 p-4 text-center">
              <span className="text-2xl font-bold text-white tracking-wider">
                Bank Buddy App
              </span>
              <p className="pt-2">
                A finance management app. Built with React and Rails.
              </p>
              <div className="pt-8">
                <a
                  href="https://capstone-frontend-yx8y.onrender.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/Morgan-and-sons/capstone-frontend"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Frontend
                  </button>
                </a>
                <a
                  href="https://github.com/Morgan-and-sons/capstone-backend"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Backend
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${work3})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effects */}
            <div className="opacity-0 group-hover:opacity-100 p-4 text-center">
              <span className="text-2xl font-bold text-white tracking-wider">
                Cat Tinder App
              </span>
              <p className="pt-2">
                A fun app to find cats. Built with React and Rails.
              </p>
              <div className="pt-8">
                <a
                  href="https://github.com/learn-academy-2024-alpha/cat-tinder-frontend-catdaddys-luis-mark"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Frontend
                  </button>
                </a>
                <a
                  href="https://github.com/learn-academy-2024-alpha/cat-tinder-backend-catdaddys-luis-mark"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Backend
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work
