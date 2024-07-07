import SectionHeading from "../ui/section-heading";
import Projects from "./projects";

export default function ProjectsSection() {
  return (
    <section id="projects">
      <div className="flex flex-col space-y-6 py-8 2xl:px-24">
        <div>
          <SectionHeading text="Projects" />
        </div>

        {/* all projects container  */}
        <Projects />
      </div>
    </section>
  );
}
