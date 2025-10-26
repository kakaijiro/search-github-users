import type { Repository } from "@/types";
import { calculateMostStarredRepos } from "@/lib/utils";
import BaseChart from "./BaseChart";

export default function PopularRepos({
  repositories,
}: {
  repositories: Repository[];
}) {
  const popularRepos = calculateMostStarredRepos(repositories);

  return (
    <BaseChart
      label="Most Popular"
      color="hsl(var(--chart-1))"
      data={popularRepos}
      labelKey="repo"
      valueKey="stars"
    />
  );
}
