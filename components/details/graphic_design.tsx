import Banner from "./banner";
import Image from "next/image";
import { DetailsWebDesign, AppDesign } from "../home/design";
import Footer from "../footer";
import Container from "./container";

export default function GraphicDesign() {
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
          title="Graphic Design"
          details={
            <>
              We deliver eye-catching branding materials that are{" "}
              <br className="hidden md:block" /> tailored to meet your business
              objectives.
            </>
          }
        />
        <section className="mx-6 lg:mx-0 md:mx-10 lg:grid grid-cols-3 gap-[30px]">
          <Container
            src="/assets/graphic-design/desktop/image-change.jpg"
            heading="TIM BROWN"
            text="A book cover designed for Tim Brown’s new release, ‘Change’
"
          />

          <Container
            src="/assets/graphic-design/desktop/image-boxed-water.jpg"
            heading="BOXED WATER"
            text=" A simple packaging concept made for Boxed Water"
          />

          <Container
            src="/assets/graphic-design/desktop/image-science.jpg"
            heading="SCIENCE!"
            text=" A poster made in collaboration with the Federal Art Project"
          />
        </section>
        <div className="mt-[50px] md:mt-[120px] lg:flex justify-between gap-[30px] md:mx-10 lg:mx-0">
          <AppDesign />
          <DetailsWebDesign />
        </div>
        <Footer />
      </div>
    </section>
  );
}
