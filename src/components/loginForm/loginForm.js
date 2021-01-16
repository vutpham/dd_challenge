import React from "react";

class LoginForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleInput = this.handleInput.bind(this);
	}

	handleInput(e) {
		this.setState({ name: e.target.value });
	}

	handleSubmit(e) {
		e.preventDefault();
		if (this.state.name === "") {
			alert("Please enter your username to continue");
			return;
		}
		this.props.handleLogin({ name: this.state.name, loginTime: new Date() });
		e.target.reset();
	}

	render() {
		return (
			<form className="loginForm centered" onSubmit={this.handleSubmit}>
				<input
					className="loginInput"
					type="text"
					placeholder="Type your username..."
					onChange={this.handleInput}
				/>
				<input
					className="loginSubmit"
					type="submit"
					value="Join the DoorDash Chat!"
				/>
			</form>
		);
	}
}

export default LoginForm;
