import Projects from "./projects";

export default function ProjectsSection() {
  return (
    <section>
      <div className="mt-20 space-y-6 flex flex-col">
        <div>
          <h3 className="uppercase text-primary-foreground font-bold text-6xl text-center">
            Projects
          </h3>
        </div>

        <Projects />
      </div>
    </section>
  );
}
