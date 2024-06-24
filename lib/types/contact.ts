export type ContactFormValues = {
  email: string;
  subject: string;
  message: string;
};
export type ContactFormErrors = {
  [K in keyof ContactFormValues]: ContactFormValues[K] | null;
};

// export type ContactFormErrors = Partial<Record<keyof ContactFormValues, string | null>>;
