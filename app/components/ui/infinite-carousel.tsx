import { Skill } from "@/lib/types/skill";
import Image from "next/image";

export default function InfiniteCarousel({
  data,
  reverse = false,
}: {
  data: Skill[];
  reverse?: boolean;
}) {
  return (
    <div
      className="carousel"
      data-reverse={reverse}
      style={
        {
          "--card-width": "80px",
          "--card-height": "80px",
          "--card-items": data.length,
        } as React.CSSProperties
      }
    >
      <div className="track">
        {data.map((skill, index) => (
          <div
            className="card grid cursor-pointer place-content-center place-items-center gap-1 rounded-md border border-secondary-foreground bg-gray-900 hover:border-main"
            key={index}
            style={{ "--card-index": index + 1 } as React.CSSProperties}
          >
            <Image
              src={skill.imageUrl}
              width={10}
              height={10}
              alt="skill-image"
              className="w-8"
            />
            <p className="tracking-tighter text-primary-foreground">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
