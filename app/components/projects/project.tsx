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
    <div className={cn("flex w-full gap-4", isLeft && "flex-row-reverse")}>
      {/* info */}
      <div className="flex w-[500px] flex-col gap-4 self-start rounded-md border-2 border-secondary-foreground p-2">
        <p className="text-3xl font-semibold text-main">{name}</p>
        <span className="font-secondary text-xl leading-6 text-secondary-foreground">
          {description}
        </span>
      </div>

      {/* display  */}
      <div className="aspect-video w-full rounded-md border-2 border-secondary-foreground">
        <Image
          src={image}
          width={100}
          height={100}
          alt="project-main"
          className="h-full w-full rounded-md object-cover"
        />
      </div>
    </div>
  );
}
