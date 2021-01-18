import { render, screen } from "@testing-library/react";
import LoginForm from "./loginForm";

describe("LoginForm", () => {
	it("should find the text input", async () => {
		const handleLogin = jest.fn();
		render(<LoginForm handleLogin={handleLogin} />);
		const input = await screen.findAllByPlaceholderText(
			"Type your username..."
		);
		expect(input).toHaveLength(1);
	});

	it("should find the submit input button", async () => {
		const handleLogin = jest.fn();
		render(<LoginForm handleLogin={handleLogin} />);
		const input = await screen.findAllByDisplayValue("Join the DoorDash Chat!");
		expect(input).toHaveLength(1);
	});
});
