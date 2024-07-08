"use client";

import { ChangeEvent } from "react";

interface FormInputProps {
  type: "email" | "text";
  label: string;
  htmlFor: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function FormInput({
  type,
  label,
  htmlFor,
  value,
  onChange,
}: FormInputProps) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="text-base capitalize text-primary-foreground md:text-xl 2xl:text-2xl"
      >
        {label}
      </label>
      <input
        type={type}
        value={value}
        id={htmlFor}
        onChange={onChange}
        className="w-full rounded-md border bg-transparent p-1 text-base text-primary-foreground outline-none focus:border-main md:text-xl 2xl:p-2"
      />
    </div>
  );
}
