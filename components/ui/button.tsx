"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

interface IconButtonProps {
  type?: "primary" | "secondary";
  text: string;
  icon?: string;
}

const defaultClasses =
  "border-2 px-4 py-2 rounded-md text-primary font-semibold hover:opacity-90 flex items-center transition-all hover:scale-105 hover:translate-x-1 cursor-pointer gap-1";

const primaryClasses = "border-transparent bg-main text-primary";
const secondaryClasses = "border-main bg-transparent text-primary-foreground";

export default function Button({
  type = "primary",
  text,
  icon = "",
}: IconButtonProps) {
  return (
    <div
      className={cn(
        defaultClasses,
        type === "primary" ? primaryClasses : secondaryClasses
      )}
    >
      <button>{text}</button>
      {icon.trim() && (
        <Image src={icon} width={22} height={22} alt="resume-download-btn" />
      )}
    </div>
  );
}
