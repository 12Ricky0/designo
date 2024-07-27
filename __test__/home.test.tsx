/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import Header from "@/components/header";
import HomePage from "@/components/home/frame";
import React, { useState } from "react";
import Footer from "@/components/footer";

describe("Home component", () => {
  const mock = jest.fn().mockReturnValue(true);
  const useSateMock: any = (useState: any) => [useState, mock];

  jest.spyOn(React, "useState").mockImplementation(useSateMock);

  it("renders the header correctly", async () => {
    render(<Header />);

    const header = screen.getByRole("link", { name: /our company/i });
    expect(header).toBeInTheDocument();

    const burger = screen.getByAltText("burger");
    await user.click(burger);
    expect(mock).toHaveBeenCalled();
  });

  it("renders the footer correctly", () => {
    render(<Footer />);
    const footer = screen.getByRole("link", { name: /get in touch/i });
    expect(footer).toBeInTheDocument();
  });
});

// const pause = () => {
//   return new Promise((resolve) => setTimeout(resolve, 100));
// };
