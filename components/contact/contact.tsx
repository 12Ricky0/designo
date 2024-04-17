"use client";
import getData from "@/lib/actions";
import ImgContainer from "../image-container";
import Footer from "../footer";
import { useFormState } from "react-dom";
import Image from "next/image";
import Link from "next/link";

export default function ContactForm() {
  const initialState = { message: null, errors: {} };
  const [state, formAction] = useFormState(getData, initialState);

  return (
    <section>
      <div className="bg-primary-peach contact-bg items-center py-12 lg:mx-[165px] md:mx-[40px] md:rounded-lg lg:flex justify-between">
        <article className=" text-white text-center md:text-left mx-6 lg:mx-[95px] lg:w-[60%]">
          <h1 className="text-[32px] md:text-[48px] md:leading-[48px] leading-[36px] font-medium mb-7">
            Contact Us
          </h1>
          <p className="text-[16px] pb-12 font-medium leading-[26px]">
            Ready to take it to the next level? Let’s talk about your project or
            idea and find out how we can help your business grow. If you are
            looking for unique digital experiences that’s relatable to your
            users, drop us a line.{" "}
          </p>
        </article>

        <form
          action={formAction}
          className="mx-6 text-center md:text-right lg:mx-0 lg:mr-[95px]"
        >
          <div
            id="customer-error"
            aria-live="polite"
            aria-atomic="true"
            className="absolute right-0 lg:mx-[260px] md:mx-[64px] mx-6 pt-[9px] "
          >
            {state?.errors?.name && (
              <div className="flex">
                <p className="mt-2 text-sm text-white font-medium">
                  {state.errors.name}
                </p>
                <Image
                  src="/assets/contact/desktop/icon-error.svg"
                  alt="error"
                  width={20}
                  height={20}
                  className="pt-[9px] ml-[9px]"
                />
              </div>
            )}
          </div>

          <input
            className="bg-transparent p-[11px] focus:border-b-2 outline-0 mb-[25px] text-[15px] w-[100%] font-medium leading-[26px] placeholder:text-secondary-light-gray placeholder:opacity-50 text-white border-b"
            type="text"
            placeholder="Name"
            name="name"
          />
          <div
            id="customer-error"
            aria-live="polite"
            aria-atomic="true"
            className="absolute right-0 lg:mx-[260px] md:mx-[64px] mx-6 pt-[9px] "
          >
            {state?.errors?.email && (
              <div className="flex">
                <p className="mt-2 text-sm text-white font-medium">
                  {state.errors.email}
                </p>
                <Image
                  src="/assets/contact/desktop/icon-error.svg"
                  alt="error"
                  width={20}
                  height={20}
                  className="pt-[9px] ml-[9px]"
                />
              </div>
            )}
          </div>

          <input
            className="bg-transparent p-[11px] focus:border-b-2 outline-0 mb-[25px] text-[15px] w-[100%] font-medium leading-[26px] placeholder:text-secondary-light-gray placeholder:opacity-50 text-white border-b"
            type="email"
            placeholder="Email"
            name="email"
          />
          <div
            id="customer-error"
            aria-live="polite"
            aria-atomic="true"
            className="absolute right-0 lg:mx-[260px] md:mx-[64px] mx-6 pt-[9px] "
          >
            {state?.errors?.number && (
              <div className="flex">
                <p className="mt-2 text-sm text-white font-medium">
                  {state.errors.number}
                </p>
                <Image
                  src="/assets/contact/desktop/icon-error.svg"
                  alt="error"
                  width={20}
                  height={20}
                  className="pt-[9px] ml-[9px]"
                />
              </div>
            )}
          </div>

          <input
            className="bg-transparent p-[11px] focus:border-b-2 outline-0 mb-[25px] text-[15px] w-[100%] font-medium leading-[26px] placeholder:text-secondary-light-gray placeholder:opacity-50 text-white border-b"
            type="number"
            placeholder="Phone"
            name="phone"
          />
          <textarea
            className="bg-transparent px-[11px] pb-[75px] focus:border-b-2 outline-0 mb-[25px] text-[15px] w-[100%] font-medium leading-[26px] placeholder:text-secondary-light-gray placeholder:opacity-50 text-white border-b"
            placeholder="Your Message"
            name="message"
          />

          <button
            className="bg-white border-0 w-[152px] hover:text-white hover:bg-secondary-light-peach mt-[29px] h-[56px] rounded-lg font-medium text-[15px] tracking-[1px]"
            type="submit"
          >
            SUBMIT
          </button>
        </form>
      </div>
      <div className="my-[120px] lg:flex lg:mx-[165px] justify-around ">
        <Image
          src="/assets/shared/desktop/bg-pattern-leaf.svg"
          width={1006}
          alt="passionate"
          height={594}
          className="right-0 hidden lg:block translate-y-[120px] absolute "
        />

        <div className="text-center mb-12 relative z-50">
          <ImgContainer src="/assets/shared/desktop/illustration-canada.svg" />
          <h1 className="text-[20px] leading-[26px] tracking-[5px] font-medium my-8">
            CANADA
          </h1>
          <button className="rounded-lg text-[15px] tracking-[1px] w-[152px] h-[56px] bg-primary-peach hover:bg-secondary-light-peach text-white">
            <Link href="/location">SEE LOCATION</Link>
          </button>
        </div>

        <div className="text-center mb-12 relative z-50">
          <ImgContainer src="/assets/shared/desktop/illustration-australia.svg" />
          <h1 className="text-[20px] leading-[26px] tracking-[5px] font-medium my-8">
            AUSTRALIA
          </h1>
          <button className="rounded-lg text-[15px] tracking-[1px] w-[152px] h-[56px] bg-primary-peach hover:bg-secondary-light-peach text-white">
            <Link href="/location">SEE LOCATION</Link>
          </button>
        </div>

        <div className="text-center relative z-50">
          <ImgContainer src="/assets/shared/desktop/illustration-united-kingdom.svg" />
          <h1 className="text-[20px] leading-[26px] tracking-[5px] font-medium my-8">
            UNITED KINGDOM
          </h1>
          <button className="rounded-lg text-[15px] tracking-[1px] w-[152px] h-[56px] bg-primary-peach hover:bg-secondary-light-peach text-white">
            <Link href="/location">SEE LOCATION</Link>
          </button>
        </div>
      </div>

      <Footer />
    </section>
  );
}
