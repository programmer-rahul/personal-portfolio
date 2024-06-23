"use client";

import Button from "../ui/button";

export default function ContactAndResumeBtns() {
  return (
    <div className="flex gap-2 sm:gap-5">
      <a href="#contact">
        <Button type="secondary" text="Contact Me" icon="/svg/arrow.svg" />
      </a>
      <Button type="primary" text="Download Resume" icon="/svg/download.svg" />
    </div>
  );
}
