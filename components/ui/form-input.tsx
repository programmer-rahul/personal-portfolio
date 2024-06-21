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
        className="text-xl text-primary-foreground capitalize"
      >
        {label}
      </label>
      <input
        type={type}
        value={value}
        id={htmlFor}
        onChange={onChange}
        className="w-full p-2 rounded-md bg-transparent border text-primary-foreground text-xl outline-none focus:border-main"
      />
    </div>
  );
}
