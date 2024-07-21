"use client";

import { RESUME_LINK } from "@/lib/constants";
import Button from "../ui/button";

export default function ContactAndResumeBtns() {
  return (
    <div className="flex gap-2 sm:gap-5">
      <a href={RESUME_LINK} target="_blank">
        <Button
          type="primary"
          text="Download Resume"
          icon="/svg/download.svg"
        />
      </a>
    </div>
  );
}
