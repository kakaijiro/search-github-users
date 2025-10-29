import type { Repository } from "../types";
import {
  calculateMostForkedRepos,
  calculateMostStarredRepos,
  calculatePopularLanguages,
} from "../lib/utils";
import { mockRepositories } from "./mock-data";

// ---------- tests ----------
describe("calculate most forked repos", () => {
  test("should return an empty array if the repositories array is empty", () => {
    const result = calculateMostForkedRepos([]);
    expect(result).toEqual([]);
  });

  test("should return top 5 most forked repositories", () => {
    const result = calculateMostForkedRepos(mockRepositories);
    expect(result).toEqual([
      { repo: "repo3", count: 1000 },
      { repo: "repo1", count: 500 },
      { repo: "repo2", count: 300 },
    ]);
  });

  test("should sort repositories by fork count in descending order", () => {
    const result = calculateMostForkedRepos(mockRepositories);
    expect(result[0].count).toBeGreaterThan(result[1].count);
    expect(result[1].count).toBeGreaterThan(result[2].count);
  });
});

describe("calculate most starred repos", () => {
  test("should return empty array for empty input", () => {
    const result = calculateMostStarredRepos([]);
    expect(result).toEqual([]);
  });

  test("should return top 5 most starred repositories", () => {
    const result = calculateMostStarredRepos(mockRepositories);
    expect(result).toEqual([
      { repo: "repo3", stars: 3000 },
      { repo: "repo2", stars: 2000 },
      { repo: "repo1", stars: 1000 },
    ]);
  });

  test("should sort repositories by star count in descending order", () => {
    const result = calculateMostStarredRepos(mockRepositories);
    expect(result[0].stars).toBeGreaterThan(result[1].stars);
    expect(result[1].stars).toBeGreaterThan(result[2].stars);
  });
});

describe("calculate popular languages", () => {
  test("shold return empty array for empty input", () => {
    const result = calculatePopularLanguages([]);
    expect(result).toEqual([]);
  });

  test("should return empty array when no languages are present", () => {
    const repoWithNoLanguages: Repository[] = [
      { ...mockRepositories[0], languages: { edges: [] } },
    ];
    const result = calculatePopularLanguages(repoWithNoLanguages);
    expect(result).toEqual([]);
  });

  test("should return top 5 most used languages", () => {
    const result = calculatePopularLanguages(mockRepositories);
    expect(result).toEqual([
      { language: "javascript", count: 2 },
      { language: "typescript", count: 2 },
      { language: "python", count: 2 },
    ]);
  });

  test("should count language occurrences correctly", () => {
    const result = calculatePopularLanguages(mockRepositories);
    const jsCount = result.find((lang) => lang.language === "javascript");
    expect(jsCount?.count).toBe(2);
    const tsCount = result.find((lang) => lang.language === "typescript");
    expect(tsCount?.count).toBe(2);
    const pyCount = result.find((lang) => lang.language === "python");
    expect(pyCount?.count).toBe(2);
  });
});
