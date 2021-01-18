import React from "react";
import socketIOClient from "socket.io-client";
import ChatRoomHeader from "./chatRoomHeader";
import ChatRoomMessages from "./chatRoomMessages";
import ChatForm from "./chatForm";

const ENDPOINT = "http://localhost:8080";
const NEW_CHAT_MESSAGE_EVENT = "newChatMessage";

class ChatRoom extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			users: [],
			messages: [],
		};

		this.socket = null;
	}

	componentDidUpdate(prevProps) {
		if (prevProps.chatRoomId !== this.props.chatRoomId) {
			this.fetchData();
			this.createSocket();
		}
	}

	createSocket = () => {
		if (this.socket) {
			this.socket.disconnect();
		}

		this.socket = socketIOClient(ENDPOINT, {
			query: { roomId: this.props.chatRoomId },
		});

		// Listens for incoming messages
		this.socket.on(NEW_CHAT_MESSAGE_EVENT, (message) => {
			this.setState((state) => {
				const messages = state.messages.concat(message);
				if (!state.users.includes(message.name)) {
					return { messages, users: state.users.concat(message.name) };
				}
				return { messages };
			});
		});
	};

	fetchData = () => {
		if (this.props.chatRoomId === null) return;
		fetch(`http://localhost:8080/api/rooms/${this.props.chatRoomId}`)
			.then((resp) => resp.json())
			.then(({ name, users }) => this.setState({ name, users }));

		fetch(`http://localhost:8080/api/rooms/${this.props.chatRoomId}/messages`)
			.then((resp) => resp.json())
			.then((data) => this.setState({ messages: data }));
	};

	sendMessage = (message) => {
		if (message === "") return;
		const { currentUser, chatRoomId } = this.props;
		const requestOptions = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ name: currentUser, message }),
		};

		fetch(
			`http://localhost:8080/api/rooms/${chatRoomId}/messages`,
			requestOptions
		)
			.then((resp) => {
				return resp.json();
			})
			.then((data) => {
				this.socket.emit(NEW_CHAT_MESSAGE_EVENT, data);
			});
	};

	render() {
		const { name, users, messages } = this.state;
		const { currentUser } = this.props;
		return (
			<div className="chatroom-container">
				<ChatRoomHeader
					name={name || ""}
					users={users || []}
					currentUser={currentUser}
				/>
				<ChatRoomMessages currentUser={currentUser} messages={messages || []} />
				<ChatForm sendMessage={this.sendMessage} />
			</div>
		);
	}
}

export default ChatRoom;
