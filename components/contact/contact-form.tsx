"use client";

import { useState } from "react";
import FormTextArea from "../ui/form-textarea";
import FormInput from "../ui/form-input";
import IconButton from "../ui/button";
import { ContactFormErrors, ContactFormValues } from "@/lib/types/contact";
import contactFormValidation from "@/lib/validation/contact-form-validations";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [formValues, setFormValues] = useState<ContactFormValues>({
    email: "",
    subject: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState<ContactFormErrors>({
    email: null,
    subject: null,
    message: null,
  });

  const handleSendEmail = async (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    event.preventDefault();

    const { isValid, error } = contactFormValidation(formValues);

    setFormErrors(error);
    if (!isValid) return;

    // send mail

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

    try {
      const response = await emailjs.send(
        serviceId,
        templateId,
        {
          from_email: formValues.email,
          subject: formValues.subject,
          message: formValues.message,
        },
        publicKey,
      );
      console.log("Email send successfully", response);
    } catch (error) {
      console.log("error in email sending", error);
    }
  };

  return (
    <form className="w-full xl:w-5/12">
      <div className="rounded-md bg-secondary-background p-2 shadow-md md:p-3">
        <div className="flex flex-col gap-4">
          <div>
            <FormInput
              type="email"
              label="email"
              htmlFor="email"
              value={formValues.email}
              onChange={(event) => {
                setFormValues((prev) => ({
                  ...prev,
                  email: event.target.value,
                }));
              }}
            />
            <p className="text-rose-600">
              {formErrors.email ? formErrors.email : ""}
            </p>
          </div>
          <div>
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
            <p className="text-rose-600">
              {formErrors.subject ? formErrors.subject : ""}
            </p>
          </div>
          <div>
            <FormTextArea
              value={formValues.message}
              onChange={(event) =>
                setFormValues((prev) => ({
                  ...prev,
                  message: event.target.value,
                }))
              }
            />
            <p className="text-rose-600">
              {formErrors.message ? formErrors.message : ""}
            </p>
          </div>

          <div className="self-center" onClick={handleSendEmail}>
            <IconButton text="Send" icon="/svg/send-message.svg" />
          </div>
        </div>
      </div>
    </form>
  );
}
