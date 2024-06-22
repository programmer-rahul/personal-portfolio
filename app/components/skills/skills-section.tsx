import Skills from "./skills";

export default function SkillsSection() {
  return (
    <section>
      <div className="mt-20 w-full space-y-6 flex flex-col">
        <div>
          <h3 className="uppercase text-primary-foreground font-bold text-6xl text-center">
            Skills
          </h3>
        </div>

        <Skills />
      </div>
    </section>
  );
}
