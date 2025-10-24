import type { Repository } from "@/types";
import { calculatePopularLanguages } from "@/lib/utils";

export default function UsedLanguages({
  repositories,
}: {
  repositories: Repository[];
}) {
  const popularLanguages = calculatePopularLanguages(repositories);
  console.log(popularLanguages);

  return <div>UsedLanguages</div>;
}
