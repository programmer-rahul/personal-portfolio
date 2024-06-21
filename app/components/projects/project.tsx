import { cn } from "@/lib/utils";
import Image from "next/image";

interface ProjectProps {
  name: string;
  description: string;
  image: string;
  isLeft: boolean;
}

export default function Project({
  name,
  description,
  image,
  isLeft,
}: ProjectProps) {
  return (
    <div className={cn("flex gap-4 w-full", isLeft && "flex-row-reverse")}>
      {/* info */}
      <div className="w-[500px] border-2 border-secondary-foreground p-2 flex flex-col gap-4 self-start  rounded-md">
        <p className="text-3xl text-main font-semibold">{name}</p>
        <span className="text-secondary-foreground text-xl leading-6">
          {description}
        </span>
      </div>

      {/* display  */}
      <div className="w-full border-2 border-secondary-foreground aspect-video rounded-md">
        <Image
          src={image}
          width={100}
          height={100}
          alt="project-main"
          className="rounded-md w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
