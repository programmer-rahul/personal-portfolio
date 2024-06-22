import BlobAnimation from "../ui/blob-animation";
import IntroPanel from "./intro-panel";

export default function HomeSection() {
  return (
    <section>
      <div className="flex h-[720px] items-center">
        <IntroPanel />

        <BlobAnimation />
      </div>
    </section>
  );
}
