import React from "react";
import ChatBubble from "./chatBubble";

class ChatRoomMessages extends React.Component {
	render() {
		const { currentUser, messages } = this.props;
		if (messages.length === 0) {
			return <div>No Messages :(</div>;
		}

		return (
			<div>
				{messages.map(({ name, message, id }, i) => (
					<ChatBubble
						key={id}
						idx={i}
						name={name}
						message={message}
						isCurrentUser={currentUser === name}
					/>
				))}
			</div>
		);
	}
}

export default ChatRoomMessages;
