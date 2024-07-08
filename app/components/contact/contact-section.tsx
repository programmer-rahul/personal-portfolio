import ContactForm from "@/components/contact/contact-form";
import ContactSocielLinks from "./contact-sociel-links";
import SectionHeading from "../ui/section-heading";
import SocielLinks from "./sociel-links";

export default function ContactSection() {
  return (
    <section id="contact">
      <div className="flex flex-col space-y-6 py-8 xl:px-20 2xl:px-32">
        <SectionHeading text="Contact" />

        <div className="flex flex-col justify-between gap-8 xl:flex-row xl:py-8 lg:px-20 xl:px-0">
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
