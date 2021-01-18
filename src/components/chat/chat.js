import React from "react";
import ChatRoomsList from "./chatRoomsList/chatRoomsList";
import ChatRoom from "./chatRoom/chatRoom";

class Chat extends React.Component {
	constructor(props) {
		super(props);
		this.state = { currentRoomId: null };
	}

	selectChatroom = (id) => {
		if (this.state.currentRoomId === id) return;
		this.setState({ currentRoomId: id });
	};

	render() {
		const { currentUser, date } = this.props;
		return (
			<div className="chat-container">
				<ChatRoomsList
					name={currentUser}
					date={date}
					currentRoomId={this.state.currentRoomId}
					selectChatroom={this.selectChatroom}
				/>
				<ChatRoom
					currentUser={currentUser}
					chatRoomId={this.state.currentRoomId}
				/>
			</div>
		);
	}
}

export default Chat;
