import SOCIELS from "@/lib/data/sociels";
import { Sociel } from "@/lib/types/sociel";
import Image from "next/image";

export default function SocielLinks() {
  return (
    <div className="sociel-media-links font-secondary">
      <div className="flex flex-col gap-4">
        {SOCIELS.map(({ name, text, href, imagePath }, index) => (
          <SocielLink
            name={name}
            text={text}
            href={href}
            imagePath={imagePath}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

function SocielLink({ name, text, href, imagePath }: Sociel) {
  return (
    <a
      className="flex items-center gap-1 xl:gap-2 self-start transition hover:grayscale"
      href={href}
      target="_blank"
    >
      <Image
        src={imagePath}
        width={40}
        height={40}
        alt="sociel-icons"
        className="w-8 md:w-10 xl:w-12"
      />
      <p className="text-base xl:text-2xl font-semibold text-primary-foreground md:text-xl">
        {text}
      </p>
    </a>
  );
}
