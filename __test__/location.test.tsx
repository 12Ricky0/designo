import LocationMap from "@/components/location/location";
import { screen, render } from "@testing-library/react";
import Map from "@/components/map";

it("renders LocationMap component", async () => {
  render(<LocationMap />);
  expect(await screen.findByText(/Location/i)).toBeInTheDocument();
});

jest.mock("../components/map", () => {
  return jest.fn(() => <div>This is the map component</div>);
});

it("renders LocationMap component", async () => {
  render(<LocationMap />);
  expect(await screen.findAllByText(/This is the map component/i)).toHaveLength(
    3
  );
});

// const pause = async () => {
//   await new Promise((resolve) => setTimeout(resolve, 100));
// };
