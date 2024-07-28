import { screen, render } from "@testing-library/react";
import About from "@/components/about/about";
import user from "@testing-library/user-event";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { AppRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";

// const pushMock = jest.fn();
jest.mock("next/navigation");
it("renders About page", () => {
  const { getByText } = render(<About />);
  expect(getByText(/About us/i)).toBeInTheDocument();
});

// const path = useRouter.mockReturnValue("example.com");

it("Links work correctly", async () => {
  render(<About />);
  const links = screen.getAllByRole("link");
  await user.click(links[0]);
  //   expect(pushMock).toHaveBeenCalledWith("true");
});
