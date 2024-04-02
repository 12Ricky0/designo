import Banner from "./banner";
import Image from "next/image";
import { DetailsWebDesign, GraphicDesign } from "../home/design";
import Footer from "../footer";
import Container from "./container";

export default function AppDesign() {
  return (
    <section>
      <Image
        src="/assets/shared/desktop/bg-pattern-leaf.svg"
        width={1006}
        alt="leaf"
        height={594}
        className=" hidden lg:block translate-y-[140px] absolute"
      />

      <div className="lg:mx-[165px] relative z-40">
        <Banner
          title="App Design"
          details={
            <>
              Our mobile designs bring intuitive digital solutions to your
              customers right at their fingertips.
            </>
          }
        />
        <section className="mx-6 lg:mx-0 md:mx-10 lg:grid grid-cols-3 grid-rows-2 gap-[30px]">
          <Container
            src="/assets/app-design/desktop/image-airfilter.jpg"
            heading="AIRFILTER"
            text="Solving the problem of poor indoor air quality by filtering the air"
          />

          <Container
            src="/assets/app-design/desktop/image-eyecam.jpg"
            heading="EYECAM"
            text=" Product that lets you edit your favorite photos and videos at any time"
          />

          <Container
            src="/assets/app-design/desktop/image-faceit.jpg"
            heading="FACEIT"
            text=" Get to meet your favorite internet superstar with the faceit app"
          />

          <Container
            src="/assets/app-design/desktop/image-todo.jpg"
            heading="TODO"
            text=" A todo app that features cloud sync with light and dark mode"
          />

          <Container
            src="/assets/app-design/desktop/image-loopstudios.jpg"
            heading="LOOPSTUDIOS"
            text=" A VR experience app made for Loopstudios"
          />
        </section>
        <div className="mt-[50px] md:mt-[120px] lg:flex justify-between gap-[30px] md:mx-10 lg:mx-0">
          <DetailsWebDesign />
          <GraphicDesign />
        </div>
        <Footer />
      </div>
    </section>
  );
}
