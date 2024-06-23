import skills from "@/lib/data/skills";
import Image from "next/image";
import React from "react";
import InfiniteCarousel from "../ui/infinite-carousel";

export default function Skills() {
  return (
    <div className="skills flex flex-col items-center gap-8 px-10">
      {/* frontend  */}
      <div className="w-full self-center px-10">
        <div className="w-full space-y-4">
          <h4 className="text-center font-semibold text-typewriter">
            Frontend
          </h4>
          <div>
            <InfiniteCarousel data={skills.frontend} />
          </div>
        </div>
      </div>

      {/* others  */}
      <div className="flex w-full flex-col justify-between gap-8 lg:flex-row">
        {/* backend  */}
        <div className="w-full lg:w-[45%] space-y-4">
          <h4 className="text-center font-semibold text-typewriter">Backend</h4>
          <div>
            <InfiniteCarousel data={skills.backend} reverse={true} />
          </div>
        </div>

        {/* tools  */}
        <div className="w-full lg:w-[45%] space-y-4">
          <h4 className="text-center font-semibold text-typewriter">Tools</h4>
          <div>
            <InfiniteCarousel data={skills.tools} />
          </div>
        </div>
      </div>
    </div>
  );
}
