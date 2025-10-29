import { render, screen } from "@testing-library/react";
import ForkedRepos from "@/components/charts/ForkedRepos";
import { mockRepositories } from "./mock-data";
import React from "react";

vi.mock("@/components/ui/chart", () => {
    return {
        ChartContainer: ({children}: {children: React.ReactNode}) => <div>{children}</div>,
        ChartTooltip: ({content}: {content: React.ReactNode}) => <div>{content}</div>,
        ChartTooltipContent: () => <div>Tooltip Content</div>,
    }
})

vi.mock("recharts", () => {
    return {
        BarChart: ({children}: {children: React.ReactNode}) => <div>{children}</div>,
        CartesianGrid: ({children}: {children: React.ReactNode}) => <div>CartesianGrid{children}</div>,
        XAxis: ({children}: {children: React.ReactNode}) => <div>XAxis{children}</div>,
        YAxis: ({children}: {children: React.ReactNode}) => <div>YAxis{children}</div>,
        Bar: ({children}: {children: React.ReactNode}) => <div>Bar{children}</div>,   
    }
})


describe("ForkedRepos Component", () => {
    beforeEach(() => {
        render(<ForkedRepos repositories={mockRepositories} />);
    })

    test("render the forked repos chart correctly", () => {
        expect(screen.getByText("Most Forked")).toBeInTheDocument();
    })

    test("should render the chart with correct data", () => {
        expect(screen.getByText("CartesianGrid")).toBeInTheDocument();
        expect(screen.getByText("XAxis")).toBeInTheDocument();
        expect(screen.getByText("YAxis")).toBeInTheDocument();
        expect(screen.getByText("Bar")).toBeInTheDocument();
        expect(screen.getByText("Tooltip Content")).toBeInTheDocument();
    })
})