"use client";

import { ChangeEvent } from "react";

interface FormTextAreaProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function FormTextArea({ value, onChange }: FormTextAreaProps) {
  return (
    <div>
      <label htmlFor="message" className="text-xl text-primary-foreground">
        Message
      </label>
      <textarea
        name=""
        id="message"
        className="bg-transparent block border  w-full h-40 rounded-md focus:border-main outline-none text-primary-foreground p-2"
        value={value}
        onChange={onChange}
      ></textarea>
    </div>
  );
}
