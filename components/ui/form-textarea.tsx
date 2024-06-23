"use client";

import { ChangeEvent } from "react";

interface FormTextAreaProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function FormTextArea({ value, onChange }: FormTextAreaProps) {
  return (
    <div>
      <label htmlFor="message" className="text-base text-primary-foreground">
        Message
      </label>
      <textarea
        name=""
        id="message"
        className="block h-36 w-full rounded-md border bg-transparent p-1 text-primary-foreground outline-none focus:border-main"
        value={value}
        onChange={onChange}
      ></textarea>
    </div>
  );
}
