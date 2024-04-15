import Image from "next/image";
import Footer from "../footer";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Map from "../map";
const MapComponent = dynamic(() => import("../map"), {
  loading: () => <p>A map is loading</p>,
  ssr: false, // This line is important. It's what prevents server-side render
});

export default function LocationMap() {
  return (
    <section>
      <div className="mb-10 md:mb-[120px] lg:flex flex-row-reverse lg:mx-[165px] md:mx-10 ">
        <MapComponent coordinates={[43.653225, -79.383186]} />
        {/* <Image
          src="/assets/locations/tablet/image-map-canada.png"
          alt="Location"
          width={375}
          height={320}
          className="w-[100%] md:rounded-lg md:block hidden mb-[31px] rounded-lg lg:hidden"
          quality={100}
        /> */}

        <article className="bg-primary-peach three-circle bg-opacity-10 md:rounded-lg  text-center md:text-left lg:w-[70%] md:py-[88px] lg:rounded-r-lg lg:mr-[30px]">
          <h1 className="mb-6 hidden md:block text-primary-peach text-[32px] md:mx-[75px] lg:mx-[95px] md:text-[40px] md:leading-[48px] leading-[36px] font-medium">
            Canada
          </h1>

          <div className=" md:grid grid-cols-2 items-center md:mx-[75px] lg:mx-[95px]">
            <h1 className="mb-6 pt-[80px] md:hidden text-primary-peach text-[32px] md:text-[40px] md:leading-[48px] leading-[36px] font-medium">
              Canada
            </h1>
            <article>
              <h1 className="text-[15px] text-secondary-dark-gray leading-[26px] font-bold">
                Designo Central Office
              </h1>
              <p className="text-[15px] text-secondary-dark-gray leading-[26px] mx-[24px] md:mx-0">
                3886 Wellington Street
                <br /> Toronto, Ontario M9C 3J5
              </p>
            </article>
            <article className="mt-6 md:mt-0">
              <h1 className="text-[15px] text-secondary-dark-gray leading-[26px] font-bold">
                Contact
              </h1>
              <p className="pb-[80px] md:pb-0 text-[15px] text-secondary-dark-gray leading-[26px] mx-[24px] md:mx-0">
                P : +1 253-863-8967
                <br /> M : contact@designo.co
              </p>
            </article>
          </div>
        </article>
      </div>

      <div className="mb-10 md:mb-[120px] lg:flex lg:mx-[165px] md:mx-10">
        <MapComponent coordinates={[-31.692, 152.679]} />

        {/* <Image
          src="/assets/locations/tablet/image-map-australia.png"
          alt="Location"
          width={375}
          height={320}
          className="w-[100%] md:rounded-lg md:block hidden mb-[31px] rounded-lg lg:hidden"
          quality={100}
        /> */}

        <article className="bg-primary-peach three-circle bg-opacity-10 md:rounded-lg  text-center md:text-left lg:w-[70%] md:py-[88px] lg:rounded-r-lg lg:ml-[30px]">
          <h1 className="mb-6 hidden md:block text-primary-peach text-[32px] md:mx-[75px] lg:mx-[95px] md:text-[40px] md:leading-[48px] leading-[36px] font-medium">
            Australia
          </h1>
          <div className=" md:grid grid-cols-2 items-center md:mx-[75px] lg:mx-[95px]">
            <h1 className="mb-6 pt-[80px] md:hidden text-primary-peach text-[32px] md:text-[40px] md:leading-[48px] leading-[36px] font-medium">
              Australia
            </h1>
            <article>
              <h1 className="text-[15px] text-secondary-dark-gray leading-[26px] font-bold">
                Designo AU Office
              </h1>
              <p className="text-[15px] text-secondary-dark-gray leading-[26px] mx-[24px] md:mx-0">
                19 Balonne Street
                <br /> New South Wales 2443
              </p>
            </article>
            <article className="mt-6 md:mt-0">
              <h1 className="text-[15px] text-secondary-dark-gray leading-[26px] font-bold">
                Contact
              </h1>
              <p className="pb-[80px] md:pb-0 text-[15px] text-secondary-dark-gray leading-[26px] mx-[24px] md:mx-0">
                P : (02) 6720 9092
                <br /> M : contact@designo.au
              </p>
            </article>
          </div>
        </article>
      </div>

      <div className="lg:flex flex-row-reverse md:mx-10 lg:mx-[165px]">
        <MapComponent coordinates={[51.93944, -3.8811]} />

        {/* <Image
          src="/assets/locations/tablet/image-map-uk.png"
          alt="Location"
          width={375}
          height={320}
          className="w-[100%] md:rounded-lg md:block hidden mb-[31px] rounded-lg lg:hidden"
          quality={100}
        /> */}

        <article className="bg-primary-peach three-circle bg-opacity-10 md:rounded-lg  text-center md:text-left lg:w-[70%] md:py-[88px] lg:rounded-r-lg lg:mr-[30px]">
          <h1 className="mb-6 hidden md:block text-primary-peach text-[32px] md:mx-[75px] lg:mx-[95px] md:text-[40px] md:leading-[48px] leading-[36px] font-medium">
            United Kingdom
          </h1>
          <div className=" md:grid grid-cols-2 items-center md:mx-[75px] lg:mx-[95px]">
            <h1 className="mb-6 md:hidden pt-[80px] text-primary-peach text-[32px] md:text-[40px] md:leading-[48px] leading-[36px] font-medium">
              United Kingdom
            </h1>
            <article>
              <h1 className="text-[15px] text-secondary-dark-gray leading-[26px] font-bold">
                Designo UK Office
              </h1>
              <p className="text-[15px] text-secondary-dark-gray leading-[26px] mx-[24px] md:mx-0">
                13 Colorado Way
                <br /> Rhyd-y-fro SA8 9GA
              </p>
            </article>
            <article className="mt-6 md:mt-0">
              <h1 className="text-[15px] text-secondary-dark-gray leading-[26px] font-bold">
                Contact
              </h1>
              <p className="pb-[80px] md:pb-0 text-[15px] text-secondary-dark-gray leading-[26px] mx-[24px] md:mx-0">
                P : (02) 6720 9092
                <br /> M : contact@designo.au
              </p>
            </article>
          </div>
        </article>
      </div>
      <Footer />
    </section>
  );
}
