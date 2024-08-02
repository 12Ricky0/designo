import ContactForm from "@/components/contact/contact";
import { screen, render } from "@testing-library/react";
import user from "@testing-library/user-event";

// jest.mock("react-dom", () => ({
//   ...jest.requireActual("react-dom"),
//   useFormState: () => [{}, () => {}],
//   useFormStatus: () => ({ pending: false }),
// }));

jest.mock("react-dom", () => {
  const originalModule = jest.requireActual("react-dom");

  return {
    ...originalModule,
    useFormState: () => [
      [
        {
          // Return a mock state object
          name: "",
          email: "",
        },
        // Mock setState function
        jest.fn(),
      ],
    ],
    useFormStatus: () => ({ pending: false }),
  };
});

describe("render", () => {
  render(<ContactForm />);

  it("renders ContactForm component", () => {
    expect(screen.getByPlaceholderText(/name/i)).toBeInTheDocument();
  });

  it("submits form without any error", async () => {
    render(<ContactForm />);
    const nameInput = screen.getByPlaceholderText(/name/i);
    const emailInput = screen.getByPlaceholderText(/email/i);
    const messageInput = screen.getByPlaceholderText(/message/i);
    const submit = screen.getByRole("button", { name: /submit/i });

    user.type(nameInput, "John Doe");

    await user.click(submit);
    await pause();
    screen.debug();

    // expect(
    //   screen.getByText(/form submitted successfully/i)
    // ).toBeInTheDocument();
  });
});

const pause = async () => {
  await new Promise((resolve) => setTimeout(resolve, 100));
};
