import WebDesign from "@/components/details/web_design";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web design",
};

export default function Web() {
  return <WebDesign />;
}
