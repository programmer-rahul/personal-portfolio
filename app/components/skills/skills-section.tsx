import Skills from "./skills";

export default function SkillsSection() {
  return (
    <section>
      <div className="flex w-full flex-col space-y-6 py-16">
        <div>
          <h3 className="text-center text-6xl font-bold uppercase text-primary-foreground">
            Skills
          </h3>
        </div>

        <Skills />
      </div>
    </section>
  );
}
