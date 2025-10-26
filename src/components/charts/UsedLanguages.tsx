import type { Repository } from "@/types";
import { calculatePopularLanguages } from "@/lib/utils";
import BaseChart from "./BaseChart";

export default function UsedLanguages({
  repositories,
}: {
  repositories: Repository[];
}) {
  const popularLanguages = calculatePopularLanguages(repositories);

  return (
    <BaseChart
      label="Most Used"
      color="hsl(var(--chart-3))"
      data={popularLanguages}
      labelKey="language"
      valueKey="count"
    />
  );
}
