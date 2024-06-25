export type Project = {
  name: string;
  description: string;
  imageUrl: string;
  urls: {
    repo: string;
    liveDemo: string;
  };
};

export type Projects = Project[];
