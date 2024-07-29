import ContactForm from "@/components/contact/contact";
import { render, screen } from "@testing-library/react";
import { useFormState } from "react-dom";

jest.mock("../lib/actions", () => {
  const actual = jest.requireActual("../lib/actions");
  return {
    ...actual,
    // useFormState: jest.fn(),
  };
});

it("renders Contact page", () => {
  render(<ContactForm />);
  //   expect(getByText(/Contact/i)).toBeInTheDocument();
});
