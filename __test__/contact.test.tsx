import ContactForm from "@/components/contact/contact";
import { render, screen } from "@testing-library/react";

it("renders Contact page", () => {
  render(<ContactForm />);
  //   expect(getByText(/Contact/i)).toBeInTheDocument();
});
