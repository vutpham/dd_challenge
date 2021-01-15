import React from "react";

class ChatForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			message: "",
		};
	}

	render() {
		return <div>Input box</div>;
	}
}

export default ChatForm;
