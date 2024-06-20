"use client";

import Image from "next/image";

export default function ContactAndResumeBtns() {
  return (
    <div className="flex gap-8">
      <div className="flex items-center border-2 px-4 py-1 rounded-md text-primary font-semibold hover:opacity-90 border-main bg-transparent text-primary-foreground transition-all hover:scale-105 hover:translate-x-1">
        <button>Contact Me</button>
        <Image src="/svg/arrow.svg" width={30} height={30} alt="contact-btn" />
      </div>
      <div className="transition-all border-transparent border-2 px-4 py-1 bg-main rounded-md text-primary font-semibold hover:opacity-90 hover:scale-105 hover:translate-x-1 flex gap-1 items-center">
        <button>Download Resume</button>
        <Image
          src="/svg/download.svg"
          width={22}
          height={22}
          alt="resume-download-btn"
        />
      </div>
    </div>
  );
}
