import Image from "next/image";

export default function ImgContainer({ src }: { src: string }) {
  return (
    <div className="size-[202px] shrink-0 mx-auto bg-small-circle ">
      <Image src={src} width={188} alt="resourceful" height={162} />
    </div>
  );
}
