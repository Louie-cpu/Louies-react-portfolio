import React from "react"
import { render, screen, within } from "@testing-library/react"
import Home from "../components/Home"
import "@testing-library/jest-dom/extend-expect"

describe("Home Component", () => {
  test("renders the introductory text", () => {
    render(<Home />)
    expect(screen.getByText(/Hi, my name is/i)).toBeInTheDocument()
    expect(screen.getByText(/Luis Moreno/i)).toBeInTheDocument()

    const heading = screen.getByRole("heading", {
      level: 2,
      name: /I am a Full Stack Developer/i,
    })
    expect(heading).toBeInTheDocument()

    expect(
      screen.getByText(
        /dedicated to building and designing excellent digital experiences/i
      )
    ).toBeInTheDocument()
  })

  test('renders the "View work" button and icon', () => {
    render(<Home />)
    const button = screen.getByRole("button", { name: /View work/i })
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass("text-white")

    const icon = button.querySelector(".ml-3")
    expect(icon).toBeInTheDocument()
  })

  test("renders the profile image", () => {
    render(<Home />)
    const image = screen.getByAltText(/Louie img/i)
    expect(image).toBeInTheDocument()
    expect(image).toHaveClass("mx-auto mt-8 w-1/2 max-w-xs h-auto")
  })
})
