import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom"; // For better matchers
import BaseButton from "../components/BaseButton";

describe("BaseButton Component", () => {
  test("renders with the correct text and handles click events", () => {
    const handleClick = jest.fn();

    render(
      <BaseButton onClick={handleClick} size="medium" variant="primary">
        Click Me
      </BaseButton>
    );

    // Check if the button renders with the correct text
    const buttonElement = screen.getByText("Click Me");
    expect(buttonElement).toBeInTheDocument();

    // Simulate a click event and check if the handler is called
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("applies the correct classes based on props", () => {
    render(
      <BaseButton size="large" variant="danger" disabled>
        Delete
      </BaseButton>
    );

    const buttonElement = screen.getByText("Delete");

    // Check if the button has the correct class names
    expect(buttonElement).toHaveClass("px-6 py-3 text-lg");
    expect(buttonElement).toHaveClass("bg-red-500 text-white hover:bg-red-600");
    expect(buttonElement).toHaveClass("opacity-50 cursor-not-allowed");
  });

  test("renders with default props", () => {
    render(<BaseButton>Default Button</BaseButton>);

    const buttonElement = screen.getByText("Default Button");

    // Check default classes
    expect(buttonElement).toHaveClass("px-4 py-2 text-base");
    expect(buttonElement).toHaveClass(
      "bg-blue-500 text-white hover:bg-blue-600"
    );
    expect(buttonElement).not.toBeDisabled();
  });
});
