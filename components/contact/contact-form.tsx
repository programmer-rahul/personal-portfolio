"use client";

import { useState } from "react";
import FormTextArea from "../ui/form-textarea";
import FormInput from "../ui/form-input";
import IconButton from "../ui/button";

export default function ContactForm() {
  const [formValues, setFormValues] = useState({
    email: "",
    subject: "",
    message: "",
  });

  return (
    <form>
      <div className="p-4 shadow-md space-y-6 rounded-md w-[700px] bg-secondary-background">
        <div className="flex flex-col gap-4">
          <FormInput
            type="email"
            label="email"
            htmlFor="email"
            value={formValues.email}
            onChange={(event) => {
              setFormValues((prev) => ({ ...prev, email: event.target.value }));
            }}
          />
          <FormInput
            type="text"
            label="subject"
            htmlFor="subject"
            value={formValues.subject}
            onChange={(event) => {
              setFormValues((prev) => ({
                ...prev,
                subject: event.target.value,
              }));
            }}
          />

          <FormTextArea
            value={formValues.message}
            onChange={(event) =>
              setFormValues((prev) => ({
                ...prev,
                message: event.target.value,
              }))
            }
          />

          <div className="self-center">
            <IconButton text="Send" icon="/svg/send-message.svg" />
          </div>
        </div>
      </div>
    </form>
  );
}
