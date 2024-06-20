import ContactAndResumeBtns from "@/components/home/contact-and-resume-btns";
import TypeWriterText from "./type-writer-text";

export default function IntroPanel() {
  return (
    <div className="w-1/2 space-y-4">
      <h2 className="text-bold text-7xl text-main">Name</h2>
      <TypeWriterText />
      <p className="text-primary-foreground text-xl tracking-tight">
        Passionate self-taught developer skilled in problem-solving, quick at
        finding the best solutions online, and dedicated to continuous learning
        and impactful projects.
      </p>
      <ContactAndResumeBtns />
    </div>
  );
}
