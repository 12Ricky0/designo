import LocationMap from "@/components/location/location";
import { screen, render } from "@testing-library/react";

it("renders LocationMap component", async () => {
  render(<LocationMap />);
  await pause();
  screen.debug();
  //   expect(await screen.findByText(/Location/i)).toBeInTheDocument();
});

const pause = async () => {
  await new Promise((resolve) => setTimeout(resolve, 100));
};
