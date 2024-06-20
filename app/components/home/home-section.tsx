import ContactAndResumeBtns from "@/components/home/contact-and-resume-btns";

export default function HomeSection() {
  return (
    <section>
      <div className="h-[720px] flex items-center">
        <div className="w-1/2 space-y-4">
          <h2 className="text-bold text-7xl text-main">Name</h2>
          <p className="text-5xl font-semibold text-green-500">Web Developer</p>
          <p className="text-primary-foreground text-xl tracking-tight">
            Passionate self-taught developer skilled in problem-solving, quick
            at finding the best solutions online, and dedicated to continuous
            learning and impactful projects.
          </p>
          <ContactAndResumeBtns />
        </div>
      </div>
    </section>
  );
}
