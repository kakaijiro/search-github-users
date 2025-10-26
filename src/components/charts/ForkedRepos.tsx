import { calculateMostForkedRepos } from "@/lib/utils";
import type { Repository } from "@/types";
import BaseChart from "./BaseChart";

export default function ForkedRepos({
  repositories,
}: {
  repositories: Repository[];
}) {
  const mostForkedRepos = calculateMostForkedRepos(repositories);

  return (
    <BaseChart
      label="Most Forked"
      color="hsl(var(--chart-2))"
      data={mostForkedRepos}
      labelKey="repo"
      valueKey="count"
    />
  );
}
