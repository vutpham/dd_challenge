import React from "react";
import ChatBubble from "./chatBubble";

class ChatRoomMessages extends React.Component {
	constructor(props) {
		super(props);
		this.messagesEndRef = React.createRef();
		this.scrollToBottom = this.scrollToBottom.bind(this);
	}

	componentDidUpdate(prevProps) {
		if (prevProps.messages.length === this.props.messages.length - 1) {
			this.scrollToBottom();
		}
	}
	scrollToBottom() {
		if (this.messagesEndRef.current !== null) {
			this.messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
		}
	}

	render() {
		const { currentUser, messages } = this.props;
		if (messages.length === 0) {
			return <div>No Messages :(</div>;
		}

		return (
			<div className="chatroom-messages">
				{messages.map(({ name, message, id }, i) => (
					<ChatBubble
						key={id}
						hidden={messages[i - 1] && messages[i - 1].name === name}
						name={name}
						message={message}
						isCurrentUser={currentUser === name}
					/>
				))}
				<div ref={this.messagesEndRef} />
			</div>
		);
	}
}

export default ChatRoomMessages;
