import { render, screen } from "@testing-library/react";
import UserCard from "@/components/user/UserCard";

describe("UserCard Component", () => {
  const mockProps = {
    avatarUrl: "https://example.com/avatar.png",
    name: "John Doe III",
    bio: "Frontend Engineer",
    url: "https://github.com/johndoe",
  };

  test("render user information correctly", () => {
    render(<UserCard {...mockProps} />);
    expect(screen.getByText(mockProps.name)).toBeInTheDocument();
    expect(screen.getByText(mockProps.bio)).toBeInTheDocument();

    const avatarImage = screen.getByAltText(mockProps.name);
    expect(avatarImage).toBeInTheDocument();
    expect(avatarImage).toHaveAttribute("src", mockProps.avatarUrl);

    const externalLink = screen.getByRole("link", { name: /overview/i });
    expect(externalLink).toHaveAttribute("href", mockProps.url);
    expect(externalLink).toHaveAttribute("target", "_blank");
    expect(externalLink).toHaveAttribute("rel", "noreferrer");
  });

  test("render default values when name and bio are missing", () => {
    const mockPropsWithMissingData = {
      ...mockProps,
      name: "",
      bio: "",
    };
    render(<UserCard {...mockPropsWithMissingData} />);
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("Passionate about technology")).toBeInTheDocument();
  });
});
