import ContactForm from "@/components/contact/contact";
import { screen, render, fireEvent } from "@testing-library/react";
import React from "react";

jest.mock("react-dom", () => ({
  useFormState: (getData, initialState) => {
    const [state, dispatch] = React.useReducer((state, action) => {
      switch (action.type) {
        case "ERROR":
          return { ...state, errors: action.errors };
        default:
          return state;
      }
    }, initialState);

    return [state, dispatch];
  },
}));

describe("ContactForm", () => {
  render(<ContactForm />);

  //   test("renders ContactForm component", () => {
  //     expect(screen.getByPlaceholderText("Name")).toBeInTheDocument();
  //     expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
  //     expect(screen.getByPlaceholderText("Phone")).toBeInTheDocument();
  //     expect(screen.getByPlaceholderText("Your Message")).toBeInTheDocument();
  //     expect(screen.getByText("Submit")).toBeInTheDocument();
  //   });

  //   test("handles form submission with errors", () => {
  //     render(<ContactForm />);

  //     fireEvent.click(screen.getByText("Submit"));

  //     expect(screen.queryByText("Name is required")).not.toBeInTheDocument();

  //     fireEvent.click(screen.getByText("Submit"));

  //     expect(screen.queryByText("Name is required")).toBeInTheDocument();
  //     expect(screen.queryByText("Email is required")).toBeInTheDocument();
  //     expect(screen.queryByText("Phone is required")).toBeInTheDocument();
  //   });

  //   test("displays error messages for invalid inputs", () => {
  //     const { getByPlaceholderText, getByText } = render(<ContactForm />);

  //     fireEvent.click(getByText("Submit"));

  //     expect(getByText("Name is required")).toBeInTheDocument();
  //     expect(getByText("Email is required")).toBeInTheDocument();
  //     expect(getByText("Phone is required")).toBeInTheDocument();
  //   });

  //   test("submits the form without errors", () => {
  //     const { getByPlaceholderText, getByText, queryByText } = render(
  //       <ContactForm />
  //     );

  //     fireEvent.change(getByPlaceholderText("Name"), {
  //       target: { value: "John Doe" },
  //     });
  //     fireEvent.change(getByPlaceholderText("Email"), {
  //       target: { value: "john.doe@example.com" },
  //     });
  //     fireEvent.change(getByPlaceholderText("Phone"), {
  //       target: { value: "1234567890" },
  //     });
  //     fireEvent.change(getByPlaceholderText("Your Message"), {
  //       target: { value: "Hello, this is a test message." },
  //     });

  //     fireEvent.click(getByText("Submit"));

  //     expect(queryByText("Name is required")).not.toBeInTheDocument();
  //     expect(queryByText("Email is required")).not.toBeInTheDocument();
  //     expect(queryByText("Phone is required")).not.toBeInTheDocument();
  //   });
});
