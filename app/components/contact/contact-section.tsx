import ContactForm from "@/components/contact/contact-form";
import ContactSocielLinks from "./contact-sociel-links";

export default function ContactSection() {
  return (
    <section className="p-4 px-60">
      <div className="flex flex-col space-y-20">
        <div>
          <h3 className="text-center text-6xl font-bold uppercase text-primary-foreground">
            Contact
          </h3>
        </div>
        <div className="flex justify-between gap-8">
          <ContactSocielLinks />

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
