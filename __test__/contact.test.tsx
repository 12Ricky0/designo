import ContactForm from "@/components/contact/contact";
import { screen, render } from "@testing-library/react";

it("renders ContactForm component", () => {
  render(<ContactForm />);
  expect(screen.getByText(/Contact us/i)).toBeInTheDocument();
});
