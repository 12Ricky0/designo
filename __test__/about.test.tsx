import { render } from "@testing-library/react";
import About from "@/components/about/about";

it("renders About page", () => {
  const { getByText } = render(<About />);
  expect(getByText(/About us/i)).toBeInTheDocument();
});

// const path = useRouter.mockReturnValue("example.com");
