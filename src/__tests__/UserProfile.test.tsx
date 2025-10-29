import { render, screen } from "@testing-library/react";
import UserProfile from "@/components/user/UserProfile";
import client from "@/apolloClient";
import { ApolloProvider } from "@apollo/client/react";

vi.mock("@/components/charts/ForkedRepos", () =>( {default: ()=> <div>ForkedRepos</div>,}));
vi.mock("@/components/charts/PopularRepos", () =>( {default: ()=> <div>PopularRepos</div>,}));
vi.mock("@/components/charts/UsedLanguages", () =>( {default: ()=> <div>UsedLanguages</div>,}));

const renderUserProfile = (userName: string) => {
    render(
        <ApolloProvider client={client}>
            <UserProfile userName={userName} />
        </ApolloProvider>
    )
}

describe("UserProfile Component", () => {
    test("should render the user profile correctly", async () => {
        const userName = "john_doe";
        renderUserProfile(userName);
        expect(await screen.findByText(userName)).toBeInTheDocument();
        expect(await screen.findByRole("img")).toHaveAttribute("src", `https://example.com/images/${userName}.png`);
        expect(await screen.findByText("This is a test bio")).toBeInTheDocument();
        expect(await screen.findByRole("link", {name: /overview/i})).toHaveAttribute("href", `https://github.com/${userName}`);
    })

    test("render error message when request fails", async () => {
        const userName = "request-error";
        renderUserProfile(userName);
        expect(await screen.findByText(/There was an error fetching the user data/i)).toBeInTheDocument();
    })

    test("render error message when user not found", async () => {
        const userName = "invalid-username";
        renderUserProfile(userName);
        expect(await screen.findByText(/Could not find user with username/i)).toBeInTheDocument();
    })
})