import { cn } from "@/lib/utils";
import Image from "next/image";
import ProjectTitleButtons from "../ui/project-title-btns";
import { Project as ProjectInterface } from "@/lib/types/project";

export default function Project({
  name,
  description,
  imageUrl,
  urls,
}: ProjectInterface) {
  return (
    <div
      className={cn(
        "flex w-full flex-col rounded-lg border bg-[#1e293b] lg:w-[48%]",
      )}
    >
      <ProjectTitleButtons />

      {/* display  */}
      <div className="aspect-video w-full rounded-md p-2 lg:p-3">
        <Image
          src={imageUrl}
          width={1920}
          height={1080}
          alt="project-main"
          className="h-full w-full rounded-md"
        />
      </div>

      {/* info */}
      <div className="px-2 pb-2 lg:px-3">
        {/* top bar  */}
        <div className="flex items-center justify-between border-b">
          <p className="text-2xl font-semibold text-primary-foreground lg:text-3xl">
            {name}
          </p>
          <div className="flex items-center gap-2">
            <a
              href={urls.liveDemo}
              target="_blank"
              className="cursor-pointer rounded-full border border-transparent px-3 py-1 text-typewriter/80 transition hover:border-typewriter hover:text-typewriter/100 lg:text-xl"
            >
              Live Demo
            </a>
            <a href={urls.repo} target="_blank">
              <Image
                src={"/skills/github.svg"}
                width={40}
                height={40}
                alt="project-main"
                className="w-6 cursor-pointer lg:w-7"
              />
            </a>
          </div>
        </div>

        {/* description  */}
        <div className="mt-2 flex flex-col gap-2 self-start rounded-md">
          <span className="text-justify font-secondary text-base leading-6 text-secondary-foreground">
            {description}
          </span>
        </div>
      </div>
    </div>
  );
}
