import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom"; // For better matchers
import BaseSelect from "../components/BaseSelect";

describe("BaseSelect Component", () => {
  const mockOptions = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const mockOnChange = jest.fn();

  test("renders the select options", () => {
    render(
      <BaseSelect
        options={mockOptions}
        value=""
        onChange={mockOnChange}
        label="Test Label"
      />
    );

    // Check if the label renders
    expect(screen.getByText("Test Label")).toBeInTheDocument();

    // Check if the placeholder option renders
    const placeholderOption = screen.getByText("Select an option");
    expect(placeholderOption).toBeInTheDocument();

    // Check if each option renders
    mockOptions.forEach((option) => {
      expect(screen.getByText(option.label)).toBeInTheDocument();
    });
  });
});
