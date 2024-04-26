import About from "@/components/about/about";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default function OurCompany() {
  return <About />;
}
