import { calculateMostForkedRepos } from "@/lib/utils";
import type { Repository } from "@/types";

export default function ForkedRepos({
  repositories,
}: {
  repositories: Repository[];
}) {
  const mostForkedRepos = calculateMostForkedRepos(repositories);

  return <div>ForkedRepos</div>;
}
