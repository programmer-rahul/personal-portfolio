import BlobAnimation from "../ui/blob-animation";
import IntroPanel from "./intro-panel";

export default function HomeSection() {
  return (
    <section>
      <div className="flex items-center py-40">
        <IntroPanel />

        <BlobAnimation />
      </div>
    </section>
  );
}
