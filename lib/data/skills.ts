import { Skills } from "../types/skill";

const SKILLS: Skills = {
  frontend: [
    { name: "HTML", imageUrl: "/skills/html.svg" },
    { name: "CSS", imageUrl: "/skills/css.svg" },
    { name: "JavaScript", imageUrl: "/skills/javascript.svg" },
    { name: "TypeScript", imageUrl: "/skills/typescript.svg" },
    { name: "React", imageUrl: "/skills/react.svg" },
    { name: "Tailwind", imageUrl: "/skills/tailwindcss.svg" },
    { name: "Next.js", imageUrl: "/skills/nextjs.svg" },
  ],
  backend: [
    { name: "Node.js", imageUrl: "/skills/nodejs.svg" },
    { name: "Express.js", imageUrl: "/skills/expressjs.svg" },
    { name: "MongoDB", imageUrl: "/skills/mongodb.svg" },
    { name: "Firebase", imageUrl: "/skills/firebase.svg" },
  ],
  tools: [
    { name: "Git", imageUrl: "/skills/git.svg" },
    { name: "GitHub", imageUrl: "/skills/github.svg" },
    { name: "Postman", imageUrl: "/skills/postman.svg" },
    { name: "VS Code", imageUrl: "/skills/vscode.svg" },
    { name: "Vercel", imageUrl: "/skills/vercel.svg" },
  ],
};

export default SKILLS;
