import Image from "next/image";
import Link from "next/link";
export default function Header() {
  return (
    <header className="mx-6 md:mx-10 lg:mx-[165px] flex justify-between my-[35px] lg:my-[64px]">
      <Link href="/">
        <Image
          alt="logo"
          src="/assets/shared/desktop/logo-dark.png"
          width={202}
          height={20}
          className="w-auto h-auto "
        />
      </Link>
      <Image
        alt="burger"
        src="/assets/shared/mobile/icon-hamburger.svg"
        width={24}
        height={20}
        className="w-auto h-auto md:hidden"
      />

      <div className="md:inline-flex hidden gap-[42px]">
        <Link
          href="/about"
          className="leading-[14px] transition-all ease-in-out delay-75 hover:scale-110 tracking-[2px] hover:underline decoration-slate-400  text-[14px] font-normal text-secondary-dark-gray"
        >
          OUR COMPANY
        </Link>
        <Link
          href="location"
          className="leading-[14px] transition-all ease-in-out delay-75 hover:scale-110 tracking-[2px] hover:underline decoration-slate-400 text-[14px] font-normal text-secondary-dark-gray"
        >
          LOCATION
        </Link>
        <Link
          href="contact"
          className="leading-[14px] transition-all ease-in-out delay-75 hover:scale-110 tracking-[2px] hover:underline decoration-slate-400 text-[14px] font-normal text-secondary-dark-gray"
        >
          CONTACT
        </Link>
      </div>
    </header>
  );
}
