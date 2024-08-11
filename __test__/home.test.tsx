/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import Header from "@/components/header";
import HomePage from "@/components/home/frame";
import React from "react";
import Footer from "@/components/footer";
jest.mock("../components/overlay", () => {
  return jest.fn(() => <h1>Mocked Overlay</h1>);
});

jest.mock("next/navigation");
describe("Home component", () => {
  //   const mock = jest.fn().mockReturnValue(true);
  //   const useSateMock: any = (useState: any) => [useState, mock];

  //   jest.spyOn(React, "useState").mockImplementation(useSateMock);

  it("renders the header correctly", async () => {
    render(<Header />);

    const header = screen.getByRole("link", { name: /our company/i });
    expect(header).toBeInTheDocument();

    const burger = screen.getByAltText("burger");
    await user.click(burger);
    expect(
      await screen.findByRole("heading", { level: 1 })
    ).toBeInTheDocument();
  });

  it("renders the footer correctly", () => {
    render(<Footer />);
    const footer = screen.getByRole("link", { name: /get in touch/i });
    expect(footer).toBeInTheDocument();
  });
});

describe("HomePage component", () => {
  it("renders the home page correctly", () => {
    render(<HomePage />);
    const links = screen.getAllByRole("link", { name: /view projects/i });
    expect(links).toHaveLength(3);
  });

  //   it("responds to user click", async () => {
  //     render(<HomePage />);
  //     const links = screen.getAllByRole("link", { name: /view projects/i });

  //     await user.click(links[0]);
  //     expect(spy).toHaveBeenCalledWith("view projects");
  //   });
});
