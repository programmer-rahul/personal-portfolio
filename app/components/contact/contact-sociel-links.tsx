import SocielLinks from "./sociel-links";

export default function ContactSocielLinks() {
  return (
    <div className="space-y-16">
      <div className="space-y-2">
        <h4 className="text-3xl text-main font-semibold">
          Have a project in mind?
        </h4>
        <p className="text-xl text-primary-foreground">
          Let's collaborate and bring your ideas to life. I'm excited to work on
          innovative projects and explore new opportunities.
        </p>
      </div>

      <SocielLinks />
    </div>
  );
}
