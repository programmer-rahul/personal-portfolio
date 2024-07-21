"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import './button.css'; // Import the CSS file here

interface IconButtonProps {
  type?: "primary";
  text: string;
  icon?: string;
}

const defaultClasses =
  "border-2 text-base px-2 py-[.1rem] sm:py-1 sm:px-3 md:text-xl 2xl:text-2xl rounded-md text-primary hover:opacity-90 flex items-center transition-all hover:scale-105 hover:translate-x-1 cursor-pointer gap-1";

const primaryClasses = "button-primary";

export default function Button({
  type = "primary",
  text,
  icon = "",
}: IconButtonProps) {
  return (
    <div
      className={cn(
        defaultClasses,
        primaryClasses
      )}
    >
      <button>{text}</button>
      {icon.trim() && (
        <Image
          src={icon}
          width={22}
          height={22}
          alt="button-icon"
          className="w-4 2xl:w-6"
        />
      )}
    </div>
  );
}
