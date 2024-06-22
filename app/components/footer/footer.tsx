import { GITHUB_LINK } from "@/lib/constants";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t bg-main/30 py-4">
      <div className="flex justify-around p-4 uppercase">
        <div className="text-center">
          <p>
            &#169; Designed And Developed By{" "}
            <b className="transition hover:cursor-pointer hover:text-main hover:underline">
              <a href={GITHUB_LINK} target="_blank">
                Rahul
              </a>
            </b>
          </p>
        </div>

        <div>
          <a
            className="flex items-center gap-2 hover:cursor-pointer"
            href={GITHUB_LINK + "/personal-portfolio"}
            target="_blank"
          >
            <Image
              src="/skills/github.svg"
              width={20}
              height={20}
              alt="github"
            />
            <p className="transition hover:text-main">Give a star</p>
          </a>
        </div>
      </div>
    </footer>
  );
}
