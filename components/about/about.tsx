import Image from "next/image";
import ImgContainer from "../image-container";
import Footer from "../footer";
import Link from "next/link";

export default function About() {
  return (
    <section className="overflow-hidden">
      <Image
        src="/assets/shared/desktop/bg-pattern-leaf.svg"
        width={1006}
        alt="passionate"
        height={594}
        className="hidden lg:block translate-y-[320px] absolute"
      />
      <div className="lg:flex flex-row-reverse lg:mx-[165px] md:mx-10 z-40 relative">
        <Image
          src="/assets/about/mobile/image-about-hero.jpg"
          alt="hero"
          width={375}
          height={320}
          className="w-[100%]  md:hidden"
        />
        <Image
          src="/assets/about/desktop/image-about-hero.jpg"
          alt="hero"
          width={476}
          height={480}
          className=" h-[480px] rounded-r-lg hidden lg:block min-w-[300px] w-[40%]"
        />
        <Image
          src="/assets/about/tablet/image-about-hero.jpg"
          alt="hero"
          width={689}
          height={320}
          className=" h-[320px] rounded-t-lg hidden lg:hidden md:block min-w-[300px] w-[100%]"
        />
        <div className="bg-primary-peach about-bg md:mb-[120px] lg:w-[60%] lg:h-[480px] md:rounded-b-lg lg:rounded-r-none lg:rounded-l-lg lg:mx-0 lg:flex items-center">
          <article className="py-[95px] text-white text-center lg:text-left mx-6 lg:mx-[95px]">
            <h1 className="text-[32px] md:text-[48px] md:leading-[48px] leading-[36px] font-medium mb-7">
              About us
            </h1>
            <p className="text-[16px] font-medium leading-[26px]">
              Founded in 2010, we are a creative agency that produces lasting
              results for our clients. We’ve partnered with many startups,
              corporations, and nonprofits alike to craft designs that make real
              impact. We’re always looking forward to creating brands, products,
              and digital experiences that connect with our clients audiences.
            </p>
          </article>
        </div>
      </div>

      <div className="lg:mx-[165px] md:mx-10 z-40 relative lg:flex">
        <Image
          src="/assets/about/mobile/image-world-class-talent.jpg"
          alt="hero"
          width={375}
          height={320}
          className="w-[100%] md:hidden"
        />
        <Image
          src="/assets/about/desktop/image-world-class-talent.jpg"
          alt="hero"
          width={476}
          height={640}
          className="hidden lg:block rounded-l-lg"
        />

        <Image
          src="/assets/about/tablet/image-world-class-talent.jpg"
          alt="hero"
          width={476}
          height={640}
          className=" h-[320px] rounded-t-lg hidden lg:hidden md:block min-w-[300px] w-[100%]"
        />

        <article className="bg-primary-peach three-circle bg-opacity-10 md:rounded-b-lg  lg:rounded-l-none text-center lg:text-left lg:w-[60%] md:inline-flex items-center lg:rounded-r-lg">
          <div className="lg:mx-[96px] ">
            <h1 className="mb-6 pt-[80px] text-primary-peach text-[32px] md:text-[40px] md:leading-[48px] leading-[36px] font-medium">
              World-class talent
            </h1>
            <p className="pb-[80px] text-[16px] text-secondary-dark-gray leading-[26px] mx-[24px] lg:mx-0">
              We are a crew of strategists, problem-solvers, and technologists.
              Every design is thoughtfully crafted from concept to launch,
              ensuring success in its given market. We are constantly updating
              our skills in a myriad of platforms.
              <br />
              <br />
              Our team is multi-disciplinary and we are not merely interested in
              form — content and meaning are just as important. We give great
              importance to craftsmanship, service, and prompt delivery. Clients
              have always been impressed with our high-quality outcomes that
              encapsulates their brand’s story and mission.
            </p>
          </div>
        </article>
      </div>

      <div className="my-[120px] lg:flex lg:mx-[165px] justify-around z-40 relative">
        <div className="text-center mb-12">
          <ImgContainer src="/assets/shared/desktop/illustration-canada.svg" />
          <h1 className="text-[20px] leading-[26px] tracking-[5px] font-medium my-8">
            CANADA
          </h1>
          <button className="rounded-lg text-[15px] tracking-[1px] w-[152px] h-[56px] hover:bg-secondary-light-peach bg-primary-peach text-white">
            <Link href="/location">SEE LOCATION</Link>
          </button>
        </div>

        <div className="text-center mb-12">
          <ImgContainer src="/assets/shared/desktop/illustration-australia.svg" />
          <h1 className="text-[20px] leading-[26px] tracking-[5px] font-medium my-8">
            AUSTRALIA
          </h1>
          <button className="rounded-lg text-[15px] tracking-[1px] w-[152px] h-[56px] hover:bg-secondary-light-peach bg-primary-peach text-white">
            <Link href="/location">SEE LOCATION</Link>
          </button>
        </div>

        <div className="text-center">
          <ImgContainer src="/assets/shared/desktop/illustration-united-kingdom.svg" />
          <h1 className="text-[20px] leading-[26px] tracking-[5px] font-medium my-8">
            UNITED KINGDOM
          </h1>
          <button className="rounded-lg text-[15px] tracking-[1px] w-[152px] h-[56px] hover:bg-secondary-light-peach bg-primary-peach text-white">
            <Link href="/location">SEE LOCATION</Link>
          </button>
        </div>
      </div>

      {/* background-leaf */}
      <div className="w-[500px overflow-hidden absolute -translate-y-[350px] right-0">
        <Image
          src="/assets/shared/desktop/bg-pattern-leaf.svg"
          width={1006}
          alt="passionate"
          height={594}
          className="right-0 rotate-180 hidden lg:block translate-x-[350px]"
        />
      </div>
      {/* background-leaf */}

      <div className="lg:flex lg:mx-[165px] flex-row-reverse z-40 md:mx-10 relative">
        <Image
          src="/assets/about/mobile/image-real-deal.jpg"
          alt="hero"
          width={375}
          height={320}
          className="w-[100%] md:hidden"
        />
        <Image
          src="/assets/about/desktop/image-real-deal.jpg"
          alt="hero"
          width={476}
          height={640}
          className="hidden lg:block rounded-r-lg"
        />
        <Image
          src="/assets/about/tablet/image-real-deal.jpg"
          alt="hero"
          width={476}
          height={640}
          className="hidden lg:hidden md:block rounded-t-lg w-[100%]"
        />

        <article className="bg-primary-peach three-circle bg-opacity-10 text-center lg:text-left lg:w-[60%] md:inline-flex items-center md:rounded-b-lg lg:rounded-r-none lg:rounded-l-lg">
          <div className="lg:mx-[96px]">
            <h1 className="mb-6 pt-[80px] text-primary-peach text-[32px] md:text-[40px] md:leading-[48px] leading-[36px] font-medium">
              The real deal
            </h1>
            <p className="pb-[80px] text-[16px] text-secondary-dark-gray leading-[26px] mx-[24px] lg:mx-0">
              As strategic partners in our clients’ businesses, we are ready to
              take on any challenge as our own. Solving real problems require
              empathy and collaboration, and we strive to bring a fresh
              perspective to every opportunity. We make design and technology
              more accessible and give you tools to measure success.
              <br />
              <br />
              We are visual storytellers in appealing and captivating ways. By
              combining business and marketing strategies, we inspire audiences
              to take action and drive real results.
            </p>
          </div>
        </article>
      </div>
      <Footer />
    </section>
  );
}
