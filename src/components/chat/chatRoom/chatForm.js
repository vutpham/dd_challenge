import React from "react";

class ChatForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			message: "",
		};
	}

	handleChange(e) {
		this.setState({ message: e.target.value });
	}

	handleSubmit(e) {
		e.preventDefault();
		console.log(this.state.message);
	}

	render() {
		return (
			<form className="chatform" onSubmit={this.handleSubmit.bind(this)}>
				<input
					type="text"
					onChange={this.handleChange.bind(this)}
					placeholder="Type a message..."
				/>
				<input type="submit" value="Send" />
			</form>
		);
	}
}

export default ChatForm;
