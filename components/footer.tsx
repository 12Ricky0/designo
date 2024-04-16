"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  return (
    <footer>
      <div
        className={`bg-primary-peach ${
          usePathname() == "/contact" && "hidden"
        } rounded-lg mx-6 lg:mx-[165px] md:mx-[40px] footer py-[60px] translate-y-[180px] md:translate-y-[100px] text-white`}
      >
        <article className="text-center lg:text-left mx-6 lg:mx-[95px] lg:flex justify-between items-center">
          <div>
            <h1 className="text-[32px] font-medium leading-[32px]">
              {" "}
              Let’s talk about
              <br /> your project
            </h1>
            <p className="text-[15px] leading-[25px] my-8">
              Ready to take it to the next level? Contact us today and find out
              <br className="hidden md:block" />
              how our expertise can help your business grow.
            </p>
          </div>
          <Link
            href="/contact"
            className="bg-white text-primary-black mx-auto text-[15px] flex justify-center items-center hover:bg-secondary-light-peach hover:text-white font-medium rounded-lg w-[152px] h-14"
          >
            GET IN TOUCH
          </Link>
        </article>
      </div>
      <section
        className={`text-center ${
          usePathname() == "/contact"
            ? "pt-0 md:pt-0"
            : "pt-[200px] md:pt-[100px]"
        } bg-primary-black`}
      >
        <div className=" mx-6 lg:mx-[165px] md:mx-[40px] flex flex-col md:flex-row md:justify-between pt-16">
          <div className=" mb-8 border-b-[0.1px] md:border-0 border-b-gray-700">
            <Image
              alt="logo"
              src="/assets/shared/desktop/logo-light.png"
              quality={100}
              width={202}
              height={20}
              className=" w-auto mx-auto pb-[32px]"
            />
          </div>
          <div className="inline-flex flex-col md:flex-row gap-8">
            <Link
              className="text-[14px] leading-[14px] hover:underline decoration-slate-400 text-white tracking-[2px] "
              href="about"
            >
              OUR COMPANY
            </Link>
            <Link
              className="text-[14px] my-8 md:my-0 leading-[14px] hover:underline decoration-slate-400 text-white tracking-[2px] "
              href="location"
            >
              LOCATIONS
            </Link>
            <Link
              className="text-[14px] leading-[14px] hover:underline decoration-slate-400 text-white tracking-[2px] "
              href="contact"
            >
              CONTACT
            </Link>
          </div>
        </div>
        <div className="md:flex justify-between md:text-left md:mx-[40px] lg:mx-[165px]">
          <article className="opacity-50 my-10 md:my-0">
            <h1 className="text-white font-bold text-[16px] leading-[26px]">
              Designo Central Office
            </h1>
            <p className="text-secondary-light-gray text-[16px]  leading-[26px]">
              3886 Wellington Street
              <br /> Toronto, Ontario M9C 3J5
            </p>
          </article>
          <article className="opacity-50">
            <h1 className="text-white font-bold text-[16px] leading-[26px]">
              Contact Us (Central Office)
            </h1>
            <p className="text-secondary-light-gray text-[16px]  leading-[26px]">
              P : +1 253-863-8967
              <br /> M : contact@designo.co
            </p>
          </article>
          <div className="inline-flex py-10 gap-4 items-center pb-[64p]">
            <Image
              alt="sm_image"
              src="/assets/shared/desktop/icon-facebook.svg"
              quality={100}
              width={24}
              height={24}
              className=" w-auto mx-auto pb-[32px]"
            />
            <Image
              alt="sm_image"
              src="/assets/shared/desktop/icon-youtube.svg"
              quality={100}
              width={24}
              height={24}
              className=" w-auto mx-auto pb-[32px]"
            />
            <Image
              alt="sm_image"
              src="/assets/shared/desktop/icon-twitter.svg"
              quality={100}
              width={24}
              height={24}
              className=" w-auto mx-auto pb-[32px]"
            />
            <Image
              alt="sm_image"
              src="/assets/shared/desktop/icon-pinterest.svg"
              quality={100}
              width={24}
              height={24}
              className=" w-auto mx-auto pb-[32px]"
            />
            <Image
              alt="sm_image"
              src="/assets/shared/desktop/icon-instagram.svg"
              quality={100}
              width={24}
              height={24}
              className=" w-auto mx-auto pb-[32px]"
            />
          </div>
        </div>
      </section>
    </footer>
  );
}
