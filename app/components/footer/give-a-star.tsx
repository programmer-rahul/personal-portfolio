import { GITHUB_LINK } from "@/lib/constants";
import Image from "next/image";

export default function GiveAStar() {
  return (
    <div>
      <a
        className="flex items-center gap-1 hover:cursor-pointer"
        href={GITHUB_LINK + "/personal-portfolio"}
        target="_blank"
      >
        <Image
          src="/skills/github.svg"
          width={20}
          height={20}
          alt="github"
          className="w-4"
        />
        <p className="text-xs transition hover:text-main md:text-lg">
          Give a star
        </p>
      </a>
    </div>
  );
}
