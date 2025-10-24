import type { Repository } from "@/types";
import { calculateMostStarredRepos } from "@/lib/utils";

export default function PopularRepos({
  repositories,
}: {
  repositories: Repository[];
}) {
  const popularRepos = calculateMostStarredRepos(repositories);

  return <div>PopularRepos</div>;
}
