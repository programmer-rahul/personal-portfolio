import { GITHUB_LINK } from "@/lib/constants";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-4 border-t">
      <div className="p-4 flex justify-around uppercase">
        <div className="text-center">
          <p>
            &#169; Designed And Developed By{" "}
            <b className="hover:text-main transition hover:underline hover:cursor-pointer">
              <a href={GITHUB_LINK} target="_blank">
                Rahul
              </a>
            </b>
          </p>
        </div>

        <div>
          <a
            className="flex gap-2 items-center hover:grayscale transition hover:cursor-pointer"
            href={GITHUB_LINK + "/personal-portfolio"}
            target="_blank"
          >
            <Image
              src="/skills/github.svg"
              width={20}
              height={20}
              alt="github"
            />
            <p className="hover:text-main transition">Give a star</p>
          </a>
        </div>
      </div>
    </footer>
  );
}
