import React from "react";

class LoginForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
		};
	}

	handleInput = (e) => {
		this.setState({ name: e.target.value });
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.handleLogin({ name: this.state.name, loginTime: new Date() });
		e.target.reset();
	};

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
					disabled={this.state.name === ""}
					className="loginSubmit"
					type="submit"
					value="Join the DoorDash Chat!"
				/>
			</form>
		);
	}
}

export default LoginForm;
