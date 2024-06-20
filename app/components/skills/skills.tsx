"use client";

import skills from "@/lib/data/skills";
import Image from "next/image";

export default function Skills() {
  return (
    <div className="skills flex flex-col gap-4 items-center">
      {/* frontend  */}
      <div className="space-y-4">
        <h4 className="text-secondary-foreground font-semibold text-center">
          Frontend
        </h4>
        <div>
          <div className="flex gap-6 flex-wrap">
            {skills.frontend.map((skill, index) => (
              <div
                className="grid place-content-center place-items-center gap-1 border border-secondary-foreground rounded-md min-w-20 max-w-20 h-20 cursor-pointer hover:grayscale bg-gray-900"
                key={index}
              >
                <Image
                  src={skill.image}
                  width={10}
                  height={10}
                  alt="skill-image"
                  className="w-10"
                />
                <p className="text-secondary-foreground text-xs tracking-tighter">
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* backend  */}
      <div className="space-y-4">
        <h4 className="text-secondary-foreground font-semibold text-center">
          Backend
        </h4>
        <div>
          <div className="flex gap-6 flex-wrap">
            {skills.backend.map((skill, index) => (
              <div
                className="grid place-content-center place-items-center gap-1 border border-secondary-foreground rounded-md min-w-20 max-w-20 h-20 cursor-pointer hover:grayscale bg-gray-900"
                key={index}
              >
                <Image
                  src={skill.image}
                  width={10}
                  height={10}
                  alt="skill-image"
                  className="w-10"
                />
                <p className="text-secondary-foreground text-xs tracking-tighter">
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* tools  */}
      <div className="space-y-4">
        <h4 className="text-secondary-foreground text-center font-semibold">
          Tools
        </h4>
        <div>
          <div className="flex gap-6 flex-wrap">
            {skills.tools.map((skill, index) => (
              <div
                className="grid place-content-center place-items-center gap-1 border border-secondary-foreground rounded-md min-w-20 max-w-20 h-20 cursor-pointer hover:grayscale bg-gray-900"
                key={index}
              >
                <Image
                  src={skill.image}
                  width={10}
                  height={10}
                  alt="skill-image"
                  className="w-10"
                />
                <p className="text-secondary-foreground text-xs tracking-tighter">
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
