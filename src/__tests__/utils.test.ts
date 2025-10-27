import type { Repository } from "../types";
import {
  calculateMostForkedRepos,
  calculateMostStarredRepos,
  calculatePopularLanguages,
} from "../lib/utils";
import { render, screen } from "@testing-library/react";

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

// ---------- tests ----------
describe("calculate most forked repos", ()=> {

    test("should return an empty array if the repositories array is empty", () => {
      const result = calculateMostForkedRepos([]);
      expect(result).toEqual([]);
    });

    test("should return top 5 most forked repositories", () => {
      const result = calculateMostForkedRepos(mockRepositories);
      expect(result).toEqual([
        {repo: "repo3", count:1000},
        {repo: "repo1", count:500},
        {repo: "repo2", count:300},
      ])
    })

    test("should sort repositories by fork count in descending order", ()=> {
      const result = calculateMostForkedRepos(mockRepositories);
      expect(result[0].count).toBeGreaterThan(result[1].count);
      expect(result[1].count).toBeGreaterThan(result[2].count);
    })
});
