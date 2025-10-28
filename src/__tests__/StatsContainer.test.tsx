import { render, screen } from "@testing-library/react";
import StatsContainer from "@/components/user/StatsContainer";

describe("StatsContainer Component", () => {
  test("render all stats cards correctly", () => {
    const props = {
      totalRepos: 30,
      followers: 100,
      following: 50,
      gists: 10,
    };
    render(<StatsContainer {...props} />);
    expect(screen.getByText("Total Repositories")).toBeInTheDocument();
    expect(screen.getByText("30")).toBeInTheDocument();

    expect(screen.getByText("Followers")).toBeInTheDocument();
    expect(screen.getByText("100")).toBeInTheDocument();

    expect(screen.getByText("Following")).toBeInTheDocument();
    expect(screen.getByText("50")).toBeInTheDocument();

    expect(screen.getByText("Gists")).toBeInTheDocument();
    expect(screen.getByText("10")).toBeInTheDocument();
  });
});
