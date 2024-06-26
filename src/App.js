import React from "react"
import About from "./components/About"
import Contact from "./components/Contact"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Skills from "./components/Skills"
import Work from "./components/Work"

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
    </>
  )
}

export default App
