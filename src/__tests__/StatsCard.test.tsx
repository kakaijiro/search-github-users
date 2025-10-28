import { render, screen } from "@testing-library/react";
import StatsCard from "@/components/user/StatsCard";

describe("StatsCard Component", () => {
  test("render title and count correctly", () => {
    render(<StatsCard title="Total Users" count={42} />);
    expect(screen.getByText("Total Users")).toBeInTheDocument();
    expect(screen.getByText("42")).toBeInTheDocument();
  });

  test("render with zero count", () => {
    render(<StatsCard title="Total Users" count={0} />);
    expect(screen.getByText("0")).toBeInTheDocument();
  });

  test("render with large number", () => {
    render(<StatsCard title="Total Users" count={1000000000} />);
    expect(screen.getByText("1000000000")).toBeInTheDocument();
  });
});
