import { render } from "@testing-library/react";
import App from "./App";

describe("App", () => {
	beforeEach(() => {
		Object.defineProperty(window, "sessionStorage", {
			value: {
				getItem: jest.fn(() => null),
				setItem: jest.fn(() => null),
			},
			writeable: true,
		});
	});

	it("should call sessionStorage getItem on render", () => {
		render(<App />);
		expect(window.sessionStorage.getItem).toHaveBeenCalledTimes(2);
	});
});
