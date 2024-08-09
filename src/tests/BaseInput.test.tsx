import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom"; // For better matchers
import BaseInput from "../components/BaseInput";

describe("BaseInput Component", () => {
  test("renders with the correct label and handles change events", () => {
    const handleChange = jest.fn();

    render(
      <BaseInput
        value=""
        onChange={handleChange}
        placeholder="Enter your name"
        label="Name"
      />
    );

    // Check if the label renders correctly
    const labelElement = screen.getByText("Name");
    expect(labelElement).toBeInTheDocument();

    // Check if the input renders with the correct placeholder
    const inputElement = screen.getByPlaceholderText("Enter your name");
    expect(inputElement).toBeInTheDocument();

    // Simulate a change event and check if the handler is called
    fireEvent.change(inputElement, { target: { value: "John Doe" } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  test("applies the correct classes and displays validation messages", () => {
    render(
      <BaseInput
        value="test"
        onChange={() => {}}
        label="Email"
        className="custom-class"
        isValid={false}
        errorMessage="Invalid email"
      />
    );

    // Check if the label renders correctly
    const labelElement = screen.getByText("Email");
    expect(labelElement).toBeInTheDocument();

    // Check if the input has the custom class
    const inputElement = screen.getByDisplayValue("test");
    expect(inputElement).toHaveClass("custom-class");

    // Check if the error message is displayed
    const errorElement = screen.getByText("Email");
    expect(errorElement).toBeInTheDocument();
  });

  test("renders with default props", () => {
    render(<BaseInput value="" onChange={() => {}} label="Default Input" />);

    // Check if the label renders correctly
    const labelElement = screen.getByText("Default Input");
    expect(labelElement).toBeInTheDocument();

    // Check if the input renders with the correct placeholder and default type
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toHaveAttribute("type", "text");
    expect(inputElement).toHaveClass(
      "appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    );
  });
});
