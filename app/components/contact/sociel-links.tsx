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
      className="flex items-center gap-1 self-start transition hover:grayscale"
      href={href}
      target="_blank"
    >
      <Image
        src={imagePath}
        width={40}
        height={40}
        alt="sociel-icons"
        className="w-8"
      />
      <p className="text-base font-semibold text-primary-foreground">{text}</p>
    </a>
  );
}
