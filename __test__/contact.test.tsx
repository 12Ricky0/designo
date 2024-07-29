import ContactForm from "@/components/contact/contact";
import { render, screen } from "@testing-library/react";

jest.mock("react-dom", () => ({
  //   ...jest.requireActual("react-hook"),
  useFormContext: () => ({
    handleSubmit: () => jest.fn(),
    getValues: () => jest.fn(),
  }),
}));
it("renders Contact page", () => {
  render(<ContactForm />);
  //   expect(getByText(/Contact/i)).toBeInTheDocument();
});
