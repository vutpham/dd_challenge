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
		this.props.sendMessage(this.state.message);
		e.target.reset();
		this.setState({ message: "" });
	}

	render() {
		return (
			<form className="chatform" onSubmit={this.handleSubmit.bind(this)}>
				<input
					type="text"
					onChange={this.handleChange.bind(this)}
					placeholder="Type a message..."
				/>
				<input
					disabled={this.state.message === ""}
					type="submit"
					value="Send"
				/>
			</form>
		);
	}
}

export default ChatForm;
