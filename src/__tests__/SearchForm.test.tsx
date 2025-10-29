import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import SearchForm from "@/components/form/SearchForm";
import { toast } from "sonner";

vi.mock("sonner");
const setUserNameMock = vi.fn();
// Get the mocked toast after mocking the module
const mockToast = toast as unknown as { warning: ReturnType<typeof vi.fn> };

describe("SearchForm Component", () => {
    const user = userEvent.setup();

    beforeEach(()=> {
        vi.clearAllMocks();
    })

    function getFormElements() {
        const input = screen.getByRole("textbox", {name: /search/i});
        const button = screen.getByRole("button", {name: /search/i});
        return {
            input,
            button,
        }
    }

    test("render the search form correctly", ()=> {
        render(<SearchForm userName="john_doe" setUserName={setUserNameMock} />);
        const {input, button} = getFormElements();

        expect(input).toHaveValue("john_doe");
        expect(button).toBeInTheDocument();
    })

    test("display empty input when userName is not provided", ()=> {
        render(<SearchForm userName="" setUserName={setUserNameMock} />);
        const {input} = getFormElements();

        expect(input).toHaveValue("");
    })

    test("update input value on change", async () => {
        render(<SearchForm userName="" setUserName={setUserNameMock} />);
        const {input} = getFormElements();

        await user.type(input, "jane_doe")
        expect(input).toHaveValue("jane_doe");
    })

    test("show toast when submitting empty input", async () => {
        render(<SearchForm userName="" setUserName={setUserNameMock} />);
        const {button} = getFormElements();

        await user.click(button);
        expect(mockToast.warning).toHaveBeenCalledWith("Oops!", {
            description: "Please enter a username",
        });
        expect(setUserNameMock).not.toHaveBeenCalled();
    })

    test("show toast when submitting empty input", async () => {
        render(<SearchForm userName="" setUserName={setUserNameMock} />);
        const {input,button} = getFormElements();
        
        await user.type(input, "jane_doe");
        await user.click(button);
        expect(mockToast.warning).not.toHaveBeenCalled();
        expect(setUserNameMock).toHaveBeenCalledWith("jane_doe");
    })

   
})