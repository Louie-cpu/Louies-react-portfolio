import React from "react"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import About from "../components/About"

describe("About Component", () => {
  test("renders About component", () => {
    render(<About />)

    // Check if the title "About" is present and has the correct class
    const titleElements = screen.getAllByText(/about/i)
    const titleElement = titleElements.find(
      (element) =>
        element.className ===
        "text-4xl font-bold inline border-b-4 border-red-700"
    )
    expect(titleElement).toBeInTheDocument()

    // Check if the main description paragraph is present
    const mainDescription = screen.getByText(
      /Hi, I'm Luis, a Full Stack Developer/i
    )
    expect(mainDescription).toBeInTheDocument()

    // Check if the secondary paragraph is present
    const secondaryDescription = screen.getByText(
      /I am excited about creating excellent software/i
    )
    expect(secondaryDescription).toBeInTheDocument()
  })
})
