import React from "react"

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-black text-gray-300">
      <div className="flex fex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-red-600">
              About
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 text-center justify-center">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi, I'm Luis, please feel free to take a look at my work.</p>
          </div>
          <div>
            <p>
              I am excited about creating excellent software and becoming an
              asset to a company where i can showcase my abilities and further
              hone my skills as a web developer. I have collaborated on many
              projects with my team mates and have worked on everything from
              front end to back end development as well as testing libraries to
              ensure quality products.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
