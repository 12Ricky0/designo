import WebDesign from "@/components/details/web_design";
import HomePage from "@/components/home/frame";
import AppDesign from "@/components/details/app_design";
import GraphicDesign from "@/components/details/graphic_design";
import About from "@/components/about/about";
import Location from "@/components/location/location";
import Map from "@/components/map";
import dynamic from "next/dynamic";
import Contact from "@/components/contact/contact";

export default function Home() {
  return (
    <div>
      <HomePage />
    </div>
  );
}
