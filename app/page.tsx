import AboutSection from "./components/about/about-section";
import Header from "./components/header/header";
import HomeSection from "./components/home/home-section";
import SkillsSection from "./components/skills/skills-section";

export default function Home() {
  return (
    <main className="w-full h-full">
      <div className="px-60">
        <Header />
        <HomeSection />
        <AboutSection />
        <SkillsSection />
      </div>
    </main>
  );
}
