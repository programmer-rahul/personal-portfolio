import ContactAndResumeBtns from "@/components/home/contact-and-resume-btns";
import TypeWriterText from "./type-writer-text";
import LanguagesImageBg from "../ui/languages-image-bg";

export default function IntroPanel() {
  return (
    <div className="relative w-full select-none space-y-6">
      <h2 className="text-5xl font-bold text-main">Name</h2>
      <TypeWriterText />
      <p className="font-secondary text-base tracking-tight text-primary-foreground">
        Passionate self-taught developer skilled in problem-solving, quick at
        finding the best solutions online, and dedicated to continuous learning
        and impactful projects.
      </p>
      <ContactAndResumeBtns />

      {/* <LanguagesImageBg /> */}
    </div>
  );
}
