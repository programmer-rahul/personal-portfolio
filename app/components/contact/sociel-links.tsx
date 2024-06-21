import SOCIELS from "@/lib/data/sociels";
import { Sociel } from "@/lib/types/sociel";
import Image from "next/image";

export default function SocielLinks() {
  return (
    <div className="sociel-media-links">
      <div className="flex flex-col gap-6">
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
    <a className="flex gap-2 items-center hover:grayscale transition" href={href} target="_blank">
      <Image src={imagePath} width={40} height={40} alt="sociel-icons" />
      <p className="text-2xl text-primary-foreground font-semibold">{text}</p>
    </a>
  );
}
