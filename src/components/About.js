import React from "react"

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-black text-gray-300 flex items-center"
    >
      <div className="flex flex-col justify-center items-center py-14 w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-left pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-red-700">
              About
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hi, I'm Luis, a Full Stack Developer constantly looking to build
              and add to my skills. I am currently learning python 3 and am
              really enjoying it.
            </p>
          </div>
          <div>
            <p>
              I am excited about creating excellent software and becoming an
              asset to a company where I can showcase my abilities and further
              hone my skills as a web developer. I have collaborated on many
              projects with my team mates and have worked on everything from
              front end to back end development as well as testing libraries to
              ensure quality products. I love learning new things and bettering
              myself in all areas of web development. My goal is to continue to
              gain experience and build projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
