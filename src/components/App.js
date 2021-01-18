import React from "react";
import Chat from "./chat/chat";
import LoginForm from "./loginForm/loginForm";

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			name: null,
			loginTime: null,
		};
	}

	handleLogin = (info) => {
		const { name, loginTime } = info;
		sessionStorage.setItem("name", name);
		sessionStorage.setItem("loginTime", loginTime);
		this.setState({ name, loginTime });
	};

	render() {
		const name = sessionStorage.getItem("name");
		const loginTime = sessionStorage.getItem("loginTime");
		const loggedIn = name !== null && loginTime !== null;
		return (
			<div className="App">
				{loggedIn ? (
					<Chat currentUser={name} date={loginTime} />
				) : (
					<LoginForm handleLogin={this.handleLogin} />
				)}
			</div>
		);
	}
}

export default App;
