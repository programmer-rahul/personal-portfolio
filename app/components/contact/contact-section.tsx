import ContactForm from "@/components/contact/contact-form";
import ContactSocielLinks from "./contact-sociel-links";
import SectionHeading from "../ui/section-heading";
import SocielLinks from "./sociel-links";

export default function ContactSection() {
  return (
    <section id="contact">
      <div className="flex flex-col space-y-6 px-20 py-8">
        <SectionHeading text="Contact" />

        <div className="flex flex-col justify-between gap-8 xl:flex-row xl:py-8">
          <ContactSocielLinks />
          <ContactForm />
          <div className="block xl:hidden">
            <SocielLinks />
          </div>
        </div>
      </div>
    </section>
  );
}
