import React from "react";
import ChatRoomMessage from "./chatRoomMessage";

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

		return (
			<div className="chatroom-messages">
				{messages.map(({ name, message, id }, i) => (
					<ChatRoomMessage
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
