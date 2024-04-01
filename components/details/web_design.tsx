import Banner from "./banner";
import Image from "next/image";
import { AppDesign, GraphicDesign } from "../home/design";
import Footer from "../footer";
import Container from "./container";

export default function WebDesign() {
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
          title="Web Design"
          details={
            <>
              We build websites that serve as powerful marketing tools{" "}
              <br className="hidden md:block" /> and bring memorable brand
              experiences.
            </>
          }
        />
        <section className="mx-6 lg:mx-0 md:mx-10 lg:grid grid-cols-3 grid-rows-2 gap-[30px]">
          <Container
            src="/assets/web-design/desktop/image-express.jpg"
            heading="EXPRESS"
            text="A multi-carrier shipping website for ecommerce businesses"
          />

          <Container
            src="/assets/web-design/desktop/image-transfer.jpg"
            heading="TRANSFER"
            text=" Site for low-cost money transfers and sending money within
                seconds"
          />

          <Container
            src="/assets/web-design/desktop/image-photon.jpg"
            heading="PHOTON"
            text=" A state-of-the-art music player with high-resolution audio and
                DSP effects"
          />

          <Container
            src="/assets/web-design/desktop/image-builder.jpg"
            heading="BUILDER"
            text=" Connects users with local contractors based on their location"
          />

          <Container
            src="/assets/web-design/desktop/image-blogr.jpg"
            heading="BLOGR"
            text=" Blogr is a platform for creating an online blog or publication"
          />

          <Container
            src="/assets/web-design/desktop/image-camp.jpg"
            heading="CAMP"
            text=" Get expert training in coding, data, design, and digital
                marketing"
          />
        </section>
        <div className="mt-[50px] md:mt-[120px] lg:flex justify-between gap-[30px] md:mx-10 lg:mx-0">
          <AppDesign />
          <GraphicDesign />
        </div>
        <Footer />
      </div>
    </section>
  );
}
