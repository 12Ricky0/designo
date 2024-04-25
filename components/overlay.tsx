import Link from "next/link";

export default function Overlay() {
  return (
    <section
      className="w-[100%] h-[100%] z-[999] opac absolute bg-modal  md:hidden "
      // className="overlay z-[999]"
    >
      <div className="bg-primary-black w-[100%] top-0 text-center z-[1000]">
        <div className="py-[48px]">
          <Link
            href="#"
            className=" text-[24px] block tracking-[2px]  leading-[25px] text-white"
          >
            OUR COMPANY
          </Link>
          <Link
            href="#"
            className=" text-[24px] block tracking-[2px] my-8  leading-[25px] text-white"
          >
            LOCATION
          </Link>
          <Link
            href="#"
            className=" text-[24px] block tracking-[2px]  leading-[25px] text-white"
          >
            CONTACT
          </Link>
        </div>
      </div>
    </section>
  );
}
