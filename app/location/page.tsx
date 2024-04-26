import LocationMap from "@/components/location/location";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Location",
};

export default function Location() {
  return <LocationMap />;
}
