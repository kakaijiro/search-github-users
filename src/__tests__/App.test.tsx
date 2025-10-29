import { render, screen } from "@testing-library/react";
import { ApolloProvider } from "@apollo/client/react";
import userEvent from "@testing-library/user-event";
import client from "@/apolloClient";
import App from "@/App";

vi.mock("@/components/charts/ForkedRepos", () =>( {default: ()=> <div>ForkedRepos</div>,}));
vi.mock("@/components/charts/PopularRepos", () =>( {default: ()=> <div>PopularRepos</div>,}));
vi.mock("@/components/charts/UsedLanguages", () =>( {default: ()=> <div>UsedLanguages</div>,}));

const renderApp = () => {
    render(
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    )
}

describe("App Component",  () => {
    test("should render the app correctly", async() => {
        const user = userEvent.setup();
        renderApp();
        expect(await screen.findByText(/octocat/i)).toBeInTheDocument();

        const searchInput = screen.getByRole("textbox", {name: /search/i});
        await user.clear(searchInput);
        await user.type(searchInput, "john_doe");
        const submitButton = screen.getByRole("button", {name: /search/i})
        await user.click(submitButton);
        expect(await screen.findByText("john_doe")).toBeInTheDocument();
        expect(await screen.findByRole("img")).toHaveAttribute("src", "https://example.com/images/john_doe.png");
        expect(await screen.findByRole("link")).toHaveAttribute("href", "https://github.com/john_doe");
    })

    test("should show error message for invalid username", async () => {
        const user = userEvent.setup();
        renderApp();
        const searchInput = screen.getByRole("textbox", {name: /search/i});

        await user.clear(searchInput);
        await user.type(searchInput, "invalid-username");
        const submitButton = screen.getByRole("button", {name: /search/i})
        await user.click(submitButton);
        expect(await screen.findByText(/Could not find user with username: invalid-username/i)).toBeInTheDocument();

    })

    test("should show error message when request fails", async () => {
        const user = userEvent.setup();
        renderApp();
        const searchInput = screen.getByRole("textbox", {name: /search/i});

        await user.clear(searchInput);
        await user.type(searchInput, "request-error");
        const submitButton = screen.getByRole("button", {name: /search/i})
        await user.click(submitButton);
        expect(await screen.findByText(/There was an error fetching the user data/i)).toBeInTheDocument();
    })
})