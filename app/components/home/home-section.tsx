import BlobAnimation from "../ui/blob-animation";
import IntroPanel from "./intro-panel";

export default function HomeSection() {
  return (
    <section>
      <div className="flex flex-col items-center justify-center pt-20 pb-10">
        <IntroPanel />
        <div className="-mt-10 -z-10">
          <BlobAnimation />
        </div>
      </div>
    </section>
  );
}
