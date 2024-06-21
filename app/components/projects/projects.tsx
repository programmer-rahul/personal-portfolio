import Project from "./project";
import PROJECTS from "@/lib/data/projects";

export default function Projects() {
  return (
    <div className="projects py-8">
      <div className="flex flex-wrap gap-4 p-2">
        {PROJECTS.map(({ name, image, description }, index) => (
          <Project
            name={name}
            image={image}
            description={description}
            isLeft={index % 2 === 1}
          />
        ))}
      </div>
    </div>
  );
}
{
  /* <iframe src="" width={"100%"} height={"100%"} />; */
}
