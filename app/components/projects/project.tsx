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
    <div className={cn("flex w-[48%] flex-col rounded-lg border bg-[#1e293b]")}>
      <ProjectTitleButtons />

      {/* display  */}
      <div className="aspect-video w-full rounded-md px-2 py-2">
        <Image
          src={image}
          width={100}
          height={100}
          alt="project-main"
          className="h-full w-full rounded-md object-cover"
        />
      </div>

      {/* info */}
      <div className="px-3 pb-3">
        <p className="text-3xl font-semibold text-main">{name}</p>
        <div className="flex flex-col gap-2 self-start rounded-md">
          <span className="font-secondary text-xl leading-6 text-secondary-foreground">
            {description}
          </span>
        </div>
      </div>
    </div>
  );
}
