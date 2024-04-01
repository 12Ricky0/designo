import { ReactNode } from "react";

export default function Banner({
  title,
  details,
}: {
  title: string;
  details: ReactNode;
}) {
  return (
    <div className="bg-primary-peach details-bg mb-10 md:mb-[120px] md:rounded-lg md:mx-10 lg:mx-0">
      <article className="py-[95px] text-white text-center mx-6">
        <h1 className="text-[32px] leading-[36px] font-medium mb-7">{title}</h1>
        <p className="text-[15px] font-medium leading-[25px]">{details}</p>
      </article>
    </div>
  );
}
