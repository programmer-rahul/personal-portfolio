import SocielLinks from "./sociel-links";

export default function ContactSocielLinks() {
  return (
    <div className="space-y-16">
      <div className="space-y-2">
        <h4 className="text-3xl font-semibold text-main">
          Have a project in mind?
        </h4>
        <p className="font-secondary text-xl text-secondary-foreground">
          Let&apos;s collaborate and bring your ideas to life. I&apos;m excited to work on
          innovative projects and explore new opportunities.
        </p>
      </div>

      <SocielLinks />
    </div>
  );
}
