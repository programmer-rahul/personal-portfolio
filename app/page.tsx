import AboutSection from "./components/about/about-section";
import Header from "./components/header/header";
import HomeSection from "./components/home/home-section";

export default function Home() {
  return (
    <main className="w-full h-full">
      <div className="px-60">
        <Header />
        <HomeSection />
        <AboutSection />
      </div>
    </main>
  );
}
