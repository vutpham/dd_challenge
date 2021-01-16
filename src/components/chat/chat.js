import React from "react";
import ChatRoomsList from "./chatRoomsList/chatRoomsList";
import ChatRoom from "./chatRoom/chatRoom";

class Chat extends React.Component {
	constructor(props) {
		super(props);
		this.state = { selected: null };
		this.selectChatroom = this.selectChatroom.bind(this);
	}

	componentDidMount() {
		console.log("first windowCurrentUser", window.currentUser);
		delete window.currentUser;
		console.log("deleted windowCurrentUser", window.currentUser);
	}

	selectChatroom(id) {
		if (this.state.selected === id) return;
		this.setState({ selected: id });
	}

	render() {
		const { currentUser, date } = this.props;
		return (
			<div className="chat-container">
				<ChatRoomsList
					name={currentUser}
					date={date}
					selected={this.state.selected}
					selectChatroom={this.selectChatroom}
				/>
				<ChatRoom currentUser={currentUser} chatRoomId={this.state.selected} />
			</div>
		);
	}
}

export default Chat;
