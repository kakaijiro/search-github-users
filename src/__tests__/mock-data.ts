import type { Repository } from "../types";

// Mock data of a sample array of repository objects
export const mockRepositories: Repository[] = [
  {
    name: "repo1",
    description: "test repo 1",
    stargazerCount: 1000,
    forkCount: 500,
    url: "https://github.com/test/repo1",
    languages: {
      edges: [
        { node: { name: "javascript" }, size: 1000 },
        { node: { name: "typescript" }, size: 500 },
      ],
    },
  },
  {
    name: "repo2",
    description: "test repo 2",
    stargazerCount: 2000,
    forkCount: 300,
    url: "https://github.com/test/repo2",
    languages: {
      edges: [
        { node: { name: "python" }, size: 800 },
        { node: { name: "javascript" }, size: 400 },
      ],
    },
  },
  {
    name: "repo3",
    description: "test repo 3",
    stargazerCount: 3000,
    forkCount: 1000,
    url: "https://github.com/test/repo3",
    languages: {
      edges: [
        { node: { name: "typescript" }, size: 1200 },
        { node: { name: "python" }, size: 300 },
      ],
    },
  },
];

