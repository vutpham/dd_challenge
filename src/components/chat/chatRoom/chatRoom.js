import React from "react";
import ChatRoomHeader from "./chatRoomHeader";
import ChatRoomMessages from "./chatRoomMessages";
import ChatForm from "./chatForm";

class ChatRoom extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			users: [],
			messages: [],
		};
	}

	componentDidUpdate(prevProps) {
		if (prevProps.chatRoomId !== this.props.chatRoomId) {
			fetch(`http://localhost:8080/api/rooms/${this.props.chatRoomId}`)
				.then((resp) => resp.json())
				.then(({ name, users }) => this.setState({ name, users }));

			fetch(`http://localhost:8080/api/rooms/${this.props.chatRoomId}/messages`)
				.then((resp) => resp.json())
				.then((data) => this.setState({ messages: data }));
		}
	}

	render() {
		const { name, users, messages } = this.state;
		return (
			<div>
				<ChatRoomHeader name={name} users={users} />
				<ChatRoomMessages
					currentUser={this.props.currentUser}
					messages={messages}
				/>
				<ChatForm />
			</div>
		);
	}
}

export default ChatRoom;
