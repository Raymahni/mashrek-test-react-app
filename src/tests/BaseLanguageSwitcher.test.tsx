import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom"; // For better matchers
import BaseLanguageSwitcher from "../components/BaseLanguageSwitcher";
import { useTranslation } from "react-i18next";

jest.mock("react-i18next");

describe("BaseLanguageSwitcher Component", () => {
  let changeLanguageMock: any;

  beforeEach(() => {
    changeLanguageMock = jest.fn();
    (useTranslation as jest.Mock).mockReturnValue({
      i18n: {
        changeLanguage: changeLanguageMock,
      },
    });
  });

  test("renders the language buttons and triggers language change on click", () => {
    render(<BaseLanguageSwitcher />);

    // Check if the English button renders and functions correctly
    const englishButton = screen.getByText("English");
    expect(englishButton).toBeInTheDocument();
    fireEvent.click(englishButton);
    expect(changeLanguageMock).toHaveBeenCalledWith("en");

    // Check if the Español button renders and functions correctly
    const spanishButton = screen.getByText("Español");
    expect(spanishButton).toBeInTheDocument();
    fireEvent.click(spanishButton);
    expect(changeLanguageMock).toHaveBeenCalledWith("es");

    // Check if the Français button renders and functions correctly
    const frenchButton = screen.getByText("Français");
    expect(frenchButton).toBeInTheDocument();
    fireEvent.click(frenchButton);
    expect(changeLanguageMock).toHaveBeenCalledWith("fr");
  });
});
