import Image from "next/image";
import Link from "next/link";

export function WebDesign() {
  return (
    <div className="bg-mob-web-design md:bg-tab-web-design lg:bg-des-web-design mx-6 bg-cover md:mx-0 lg:h-[640px] lg:w-[100%] h-[250px] mb-6 lg:mb-0 flex justify-center items-center bg-no-repeat row-span-2 rounded-lg">
      <div>
        <h1 className="text-[28px] md:text-[40px] md:tracking-[2px] md:leading-[48px] leading-9 tracking-[1.4px] font-medium text-white ">
          WEB DESIGN
        </h1>
        <div className="inline-flex items-center gap-4 mt-4">
          <Link
            href="/webdesign"
            className="text-[15px] tracking-[5px] font-medium text-white "
          >
            VIEW PROJECTS
          </Link>
          <span>
            <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1 1l4 4-4 4"
                stroke="#E7816B"
                stroke-width="2"
                fill="none"
                fill-rule="evenodd"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}

export function AppDesign() {
  return (
    <div className="bg-mob-app-design row-span-1 md:bg-tab-app-design lg:bg-des-app-design mx-6 md:mx-0 lg:w-[100%] h-[250px] lg:h-[308px] col-span-2 mb-6 lg:mb-0 flex justify-center items-center bg-no-repeat bg-cover bg-center rounded-lg">
      <div>
        <h1 className="text-[28px] md:text-[40px] md:tracking-[2px] md:leading-[48px] leading-9 tracking-[1.4px] font-medium text-white ">
          APP DESIGN
        </h1>
        <div className="inline-flex items-center gap-4 mt-4">
          <Link
            href="/appdesign"
            className="text-[15px] tracking-[5px] font-medium text-white "
          >
            VIEW PROJECTS
          </Link>
          <span>
            <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1 1l4 4-4 4"
                stroke="#E7816B"
                stroke-width="2"
                fill="none"
                fill-rule="evenodd"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}
export function GraphicDesign() {
  return (
    <div className="bg-mob-graphic-design md:bg-tab-graphic-design lg:bg-des-graphic-design col-span-2 lg:w-[100%] mx-6 md:mx-0 h-[250px] lg:h-[308px] mb-6 lg:mb-0 flex justify-center items-center bg-no-repeat bg-cover bg-center rounded-lg">
      <div>
        <h1 className="text-[28px] md:text-[40px] md:tracking-[2px] md:leading-[48px] leading-9 tracking-[1.4px] font-medium text-white ">
          GRAPHIC DESIGN
        </h1>
        <div className="inline-flex items-center gap-4 mt-4">
          <Link
            href="/graphdesign"
            className="text-[15px] tracking-[5px] font-medium text-white "
          >
            VIEW PROJECTS
          </Link>
          <span>
            <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1 1l4 4-4 4"
                stroke="#E7816B"
                stroke-width="2"
                fill="none"
                fill-rule="evenodd"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}

export function DetailsWebDesign() {
  return (
    <div className="bg-mob-web-design md:bg-tab-web-design lg:bg-des-web2-design col-span-2 lg:w-[100%] mx-6 md:mx-0 h-[250px] lg:h-[308px] mb-6 lg:mb-0 flex justify-center items-center bg-no-repeat bg-cover bg-center rounded-lg">
      <div>
        <h1 className="text-[28px] md:text-[40px] md:tracking-[2px] md:leading-[48px] leading-9 tracking-[1.4px] font-medium text-white ">
          WEB DESIGN
        </h1>
        <div className="inline-flex items-center gap-4 mt-4">
          <Link
            href="/webdesign"
            className="text-[15px] tracking-[5px] font-medium text-white "
          >
            VIEW PROJECTS
          </Link>
          <span>
            <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1 1l4 4-4 4"
                stroke="#E7816B"
                stroke-width="2"
                fill="none"
                fill-rule="evenodd"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}

export function Resources() {
  return (
    <section className="">
      <Image
        src="/assets/shared/desktop/bg-pattern-leaf.svg"
        width={1006}
        alt="passionate"
        height={594}
        className="right-0 rotate-180 hidden lg:block translate-y-[120px] absolute"
      />
      <div className=" mx-6 lg:flex md:mx-0 relative z-30 gap-[30px] mt-[120px] lg:mt-[160px]">
        <div className="mb-20 md:inline-flex gap-12 lg:block">
          <div className="size-[202px] shrink-0 mx-auto bg-small-circle ">
            <Image
              src="/assets/home/desktop/illustration-passionate.svg"
              width={188}
              alt="passionate"
              height={162}
            />
          </div>
          <article className="text-center md:text-left lg:text-center">
            <h1 className="text-[20px] text-primary-black font-medium tracking-[5px] my-8 leading-[26px]">
              PASSIONATE
            </h1>
            <p className="text-[16px] text-secondary-dark-gray leading-[26px]">
              Each project starts with an in-depth brand research to ensure we
              only create products that serve a purpose. We merge art, design,
              and technology into exciting new solutions.
            </p>
          </article>
        </div>

        <div className="mb-20 md:inline-flex gap-12 lg:block">
          <div className="size-[202px] shrink-0 mx-auto bg-small-circle ">
            <Image
              src="/assets/home/desktop/illustration-resourceful.svg"
              width={188}
              alt="resourceful"
              height={162}
            />
          </div>
          <article className="text-center md:text-left lg:text-center">
            <h1 className="text-[20px] text-primary-black font-medium tracking-[5px] my-8 leading-[26px]">
              RESOURCEFUL
            </h1>
            <p className="text-[16px] text-secondary-dark-gray leading-[26px]">
              Everything that we do has a strategic purpose. We use an agile
              approach in all of our projects and value customer collaboration.
              It guarantees superior results that fulfill our clients’ needs.{" "}
            </p>
          </article>
        </div>

        <div className=" md:inline-flex gap-12 lg:block">
          <div className="size-[202px] shrink-0 mx-auto bg-small-circle ">
            <Image
              src="/assets/home/desktop/illustration-friendly.svg"
              width={188}
              alt="resourceful"
              height={162}
            />
          </div>
          <article className="text-center md:text-left lg:text-center">
            <h1 className="text-[20px] text-primary-black font-medium tracking-[5px] my-8 leading-[26px]">
              FRIENDLY
            </h1>
            <p className="text-[16px] text-secondary-dark-gray leading-[26px]">
              We are a group of enthusiastic folks who know how to put people
              first. Our success depends on our customers, and we strive to give
              them the best experience a company can provide.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
