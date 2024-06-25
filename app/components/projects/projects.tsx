import Project from "./project";
import PROJECTS from "@/lib/data/projects";

export default function Projects() {
  return (
    <div className="projects py-2">
      <div className="flex flex-wrap justify-center gap-4">
        {PROJECTS.map(({ name, imageUrl, description, urls }, index) => (
          <Project
            name={name}
            imageUrl={imageUrl}
            description={description}
            urls={urls}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
{
  /* <iframe src="" width={"100%"} height={"100%"} />; */
}
