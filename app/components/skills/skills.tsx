import skills from "@/lib/data/skills";
import Image from "next/image";
import React from "react";
import InfiniteCarousel from "../ui/infinite-carousel";

export default function Skills() {
  return (
    <div className="skills flex flex-col gap-4 items-center">
      {/* frontend  */}
      <div className="space-y-4">
        <h4 className="text-secondary-foreground font-semibold text-center">
          Frontend
        </h4>
        <div>
          <InfiniteCarousel data={skills.frontend} />
        </div>
      </div>

      {/* backend  */}
      <div className="space-y-4">
        <h4 className="text-secondary-foreground font-semibold text-center">
          Backend
        </h4>
        <div>
          <InfiniteCarousel data={skills.backend} reverse={true} />
        </div>
      </div>

      {/* tools  */}
      <div className="space-y-4">
        <h4 className="text-secondary-foreground font-semibold text-center">
          Tools
        </h4>
        <div>
          <InfiniteCarousel data={skills.tools} />
        </div>
      </div>
    </div>
  );
}
