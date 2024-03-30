import { WebDesign, AppDesign, GraphicDesign, Resources } from "./design";
import Footer from "../footer";
import Image from "next/image";
export default function Frame() {
  return (
    <main>
      <div className="md:mx-10 lg:mx-[165px]">
        <section className="bg-primary-peach bg-contain md:flex overflow-hidden relative h-[843px] mb-[120px] lg:h-auto  md:rounded-lg fil text-center lg:text-left">
          <article className="pt-[80px] mx-6 md:mx-[95px]">
            <h1 className="text-white text-[32px] leading-[32px] md:leading-[48px] md:text-[48px] font-medium">
              Award-winning custom designs and digital branding solutions
            </h1>
            <p className="text-white text-[15px] md:text-[16px] md:leading-[26px] leading-[25px] font-normal my-[24px]">
              With over 10 years in the industry, we are experienced in creating
              fully responsive websites, app design, and engaging brand
              experiences. Find out more about our services.
            </p>

            <button className="border-0 bg-white hover:bg-secondary-light-peach hover:text-white rounded-lg px-6 py-[18px] text-[15px] font-medium text-secondary-dark-gray">
              LEARN MORE
            </button>
          </article>
          <div className="phone lg:hidden absolute bottom-0 w-[100%]" />
          <div className="desk-phone w-[100] lg:inline-block sm:hidden" />
          {/* <div className="lg:inline-block w-[100%] bg-center sm:hidden bg-phone-img h-[550px] ">
          </div> */}
        </section>
        <div className="lg:grid grid-cols-4 grid-rows-4 gap-6">
          <WebDesign />
          <AppDesign />
          <GraphicDesign />
        </div>
        <Resources />
      </div>
      <Footer />
    </main>
  );
}
