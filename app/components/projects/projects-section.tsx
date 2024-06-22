import Projects from "./projects";

export default function ProjectsSection() {
  return (
    <section id="projects">
      <div className="flex flex-col space-y-6 py-16">
        <div>
          <h3 className="text-center text-6xl font-bold uppercase text-primary-foreground">
            Projects
          </h3>
        </div>

        <Projects />
      </div>
    </section>
  );
}
