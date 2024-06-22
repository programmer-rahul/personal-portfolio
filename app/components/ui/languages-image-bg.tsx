import Image from "next/image";

export default function LanguagesImageBg() {
  return (
    <div className="absolute top-0 -z-10 h-full w-full scale-150">
      <div className="relative h-full w-full">
        <Image
          src="/skills/javascript.svg"
          width={30}
          height={30}
          alt="language"
          className="absolute left-10 top-20 -rotate-12 grayscale transition hover:cursor-pointer hover:grayscale-0"
        />
        <Image
          src="/skills/nextjs.svg"
          width={30}
          height={30}
          alt="language"
          className="absolute right-32 top-10 rotate-12 grayscale transition hover:cursor-pointer hover:grayscale-0"
        />
        <Image
          src="/skills/mongodb.svg"
          width={30}
          height={30}
          alt="language"
          className="absolute right-1/2 top-0 -rotate-12 grayscale transition hover:cursor-pointer hover:grayscale-0"
        />
        <Image
          src="/skills/react.svg"
          width={38}
          height={38}
          alt="language"
          className="absolute bottom-6 left-1/4 rotate-12 grayscale transition hover:cursor-pointer hover:grayscale-0"
        />
        <Image
          src="/skills/github.svg"
          width={30}
          height={30}
          alt="language"
          className="absolute bottom-16 right-1/4 -rotate-12 grayscale transition hover:cursor-pointer hover:grayscale-0"
        />
      </div>
    </div>
  );
}
