import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Lukas Masuch",
  EMAIL: "lukas.masuch@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_WORKS_ON_HOMEPAGE: 0,
  NUM_PROJECTS_ON_HOMEPAGE: 0,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Software engineer writing about AI agents, developer tools, and building software that scales.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "Thoughts on AI agents, developer experience, and software engineering.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection of my projects, with links to repositories and demos.",
};

export const SOCIALS: Socials = [
  {
    NAME: "twitter-x",
    HREF: "https://x.com/lukasmasuch",
  },
  {
    NAME: "github",
    HREF: "https://github.com/lukasmasuch"
  },
  {
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/lukasmasuch",
  }
];
