import SectionHeading from "../ui/section-heading";
import AboutExp from "./about-exp";
import AboutText from "./about-text";

export default function AboutSection() {
  return (
    <section id="about">
      <div className="flex flex-col space-y-6 py-8 lg:px-20 2xl:px-72">
        <SectionHeading text="Who Am I" />

        <AboutText />

        <AboutExp />
      </div>
    </section>
  );
}
