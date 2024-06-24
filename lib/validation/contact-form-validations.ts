import { ContactFormErrors, ContactFormValues } from "../types/contact";

export default function contactFormValidation({
  email,
  subject,
  message,
}: ContactFormValues) {
  const error: ContactFormErrors = {
    email: null,
    subject: null,
    message: null,
  };

  //   email validation
  if (email.trim() === "") {
    error.email = "Email is required.";
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email))
      error.email = "Please enter a valid email addresss.";
  }

  // subject validation
  if (subject.trim() === "") {
    error.subject = "Subject is required.";
  } else if (subject.trim().length < 3)
    error.subject = "Subject must be atleast 3 characters long.";

  // message validation
  if (message.trim() === "") {
    error.message = "Message is required.";
  } else if (message.trim().length < 15)
    error.message = "Message must be atlead 15 characters long.";

  const isValid = !Object.values(error).some(
    (value) => typeof value === "string",
  );

  return { isValid, error };
}
