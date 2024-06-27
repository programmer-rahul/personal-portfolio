import { GITHUB_LINK } from "../constants";
import { Projects } from "../types/project";

const PROJECTS: Projects = [
  {
    name: "DevSync",
    description:
      "DevSync is your solution for real-time project collaboration. Create and join projects, edit code together, and manage your workspace with ease. Enhance your teamwork today.",

    imageUrl: "/projects/project1/main.png",
    urls: {
      repo: GITHUB_LINK + "/devsync",
      liveDemo: "https://syncdev.vercel.app",
    },
  },
  {
    name: "ColorCraft",
    description:
      "ColorCraft is a user-friendly gradient generator tool that helps designers and developers create stunning color gradients quickly and easily. It offers intuitive customization options to elevate web and graphic design projects.",

    imageUrl: "/projects/project2/main.png",
    urls: {
      repo: GITHUB_LINK + "/colorcraft",
      liveDemo: "https://colorcraft.vercel.app",
    },
  },
  {
    name: "Snaky",
    description:
      "Snaky offers a modern take on the classic Snake game. Navigate your snake to eat food and grow longer, but avoid hitting the walls or yourself to keep playing.",

    imageUrl: "/projects/project3/main.png",
    urls: {
      repo: GITHUB_LINK + "/snakey",
      liveDemo: "https://snake-y.vercel.app",
    },
  },
];

export default PROJECTS;
