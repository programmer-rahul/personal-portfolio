import SocielLinks from "./sociel-links";

export default function ContactSocielLinks() {
  return (
    <div className="space-y-8 xl:w-5/12">
      <div className="xl:space-y-2">
        <h4 className="text-2xl font-semibold text-main md:text-3xl xl:text-4xl">
          Have a project in mind?
        </h4>
        <p className="font-secondary text-base leading-5 text-secondary-foreground md:text-xl">
          Let&apos;s collaborate and bring your ideas to life. I&apos;m excited
          to work on innovative projects and explore new opportunities.
        </p>
      </div>

      <div className="hidden xl:block">
        <SocielLinks />
      </div>
    </div>
  );
}
