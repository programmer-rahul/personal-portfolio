import SectionHeading from "../ui/section-heading";
import Skills from "./skills";

export default function SkillsSection() {
  return (
    <section id="skills">
      <div className="flex w-full flex-col space-y-6 py-20 sm:py-8">
        <div>
          <SectionHeading text="Skills" />
        </div>

        {/* skills container  */}
        <Skills />
      </div>
    </section>
  );
}
