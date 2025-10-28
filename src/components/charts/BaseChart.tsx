import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

type ChartProps<T extends Record<string, string | number>> = {
  label: string;
  color: string;
  data: T[];
  labelKey: keyof T;
  valueKey: keyof T;
};

export default function BaseChart<T extends Record<string, string | number>>({
  label,
  color,
  data,
  labelKey,
  valueKey,
}: ChartProps<T>) {
  const chartConfig = {
    [valueKey as string]: {
      label,
      color,
    },
  } satisfies ChartConfig;

  return (
    <div>
      <h2 className="text-2xl font-semibold text-center mb-4">{label}</h2>
      <ChartContainer config={chartConfig} className="h-100 w-full">
        <BarChart accessibilityLayer data={data}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey={labelKey as string}
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(val) => val.slice(0, 8)}
          />
          <YAxis dataKey={valueKey as string} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar dataKey={valueKey as string} fill={color} radius={8} />
        </BarChart>
      </ChartContainer>
    </div>
  );
}
