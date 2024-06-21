import ContactForm from "@/components/contact/contact-form";
import ContactSocielLinks from "./contact-sociel-links";

export default function ContactSection() {
  return (
    <section>
      <div className="my-20 space-y-20 flex flex-col">
        <div>
          <h3 className="uppercase text-primary-foreground font-bold text-4xl text-center">
            Contact
          </h3>
        </div>
        <div className="flex gap-8 justify-between">
          <ContactSocielLinks />

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
