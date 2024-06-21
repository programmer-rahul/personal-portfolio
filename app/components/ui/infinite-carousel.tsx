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
          "--card-width": "120px",
          "--card-height": "120px",
          "--card-items": data.length,
        } as React.CSSProperties
      }
    >
      <div className="track">
        {data.map((skill, index) => (
          <div
            className="card grid place-content-center place-items-center gap-1 border border-secondary-foreground rounded-md cursor-pointer bg-gray-900"
            key={index}
            style={{ "--card-index": index + 1 } as React.CSSProperties}
          >
            <Image
              src={skill.imageUrl}
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
  );
}
