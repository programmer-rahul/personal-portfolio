import { cn } from "@/lib/utils";
import Image from "next/image";
import ProjectTitleButtons from "../ui/project-title-btns";

interface ProjectProps {
  name: string;
  description: string;
  image: string;
}

export default function Project({ name, description, image }: ProjectProps) {
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
          src={image}
          width={1920}
          height={1080}
          alt="project-main"
          className="h-full w-full rounded-md"
        />
      </div>

      {/* info */}
      <div className="px-2 pb-2 lg:px-3">
        <p className="text-2xl font-semibold text-main lg:text-3xl">{name}</p>

        <div className="mt-2 flex flex-col gap-2 self-start rounded-md">
          <span className="text-justify font-secondary text-base leading-6 text-secondary-foreground">
            {description}
          </span>
        </div>
      </div>
    </div>
  );
}
