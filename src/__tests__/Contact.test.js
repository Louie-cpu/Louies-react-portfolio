import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import Contact from "../components/Contact" // Adjust the import path if necessary

describe("Contact Component", () => {
  test("renders contact form with correct elements", () => {
    render(<Contact />)

    // Check for form elements
    expect(screen.getByPlaceholderText("Name")).toBeInTheDocument()
    expect(screen.getByPlaceholderText("Email")).toBeInTheDocument()
    expect(screen.getByPlaceholderText("Message")).toBeInTheDocument()
    expect(screen.getByText("Lets Collaborate")).toBeInTheDocument()

    // Check for text content
    expect(screen.getByText("Contact")).toBeInTheDocument()
    expect(
      screen.getByText(
        "Submit this form or send me an email - luis.u.m779@gmail.com"
      )
    ).toBeInTheDocument()
  })

  test("form can be filled and submitted", () => {
    // Create a mock submit handler
    const handleSubmit = jest.fn((event) => {
      event.preventDefault() // Prevent default form submission behavior
    })

    render(<Contact onSubmit={handleSubmit} />) // Pass the handler as a prop if applicable

    // Fill the form
    fireEvent.change(screen.getByPlaceholderText("Name"), {
      target: { value: "John Doe" },
    })
    fireEvent.change(screen.getByPlaceholderText("Email"), {
      target: { value: "john.doe@example.com" },
    })
    fireEvent.change(screen.getByPlaceholderText("Message"), {
      target: { value: "Hello, this is a test message." },
    })

    // Simulate form submission
    fireEvent.click(screen.getByText("Lets Collaborate"))

    // Check if the submit handler is called
    expect(handleSubmit).toHaveBeenCalled()
  })
})
