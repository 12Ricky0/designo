import Image from "next/image";

export default function Container({
  src,
  heading,
  text,
}: {
  src: string;
  heading: string;
  text: string;
}) {
  return (
    <div className="mb-10 md:flex lg:block">
      <Image
        src={src}
        alt="web"
        width={327}
        height={478}
        className="w-[100%] rounded-t-lg md:rounded-l-lg md:rounded-tr-none lg:rounded-t-lg lg:rounded-bl-none"
      />
      <article className="bg-primary-peach hover:bg-opacity-[1] group cursor-pointer bg-opacity-10 text-center md:w-[100%] md:inline-flex items-center md:rounded-r-lg md:rounded-bl-none lg:rounded-b-lg lg:rounded-tr-none rounded-b-lg">
        <div>
          <h1 className="mb-4 pt-8 text-primary-peach text-[20px] group-hover:text-white tracking-[5px] leading-[26px] font-medium">
            {heading}
          </h1>
          <p className="pb-8 text-[16px] text-secondary-dark-gray group-hover:text-white leading-[26px] mx-[30px]">
            {text}
          </p>
        </div>
      </article>
    </div>
  );
}
