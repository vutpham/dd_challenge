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

		this.fetchData = this.fetchData.bind(this);
		this.sendMessage = this.sendMessage.bind(this);
	}

	componentDidMount() {
		this.fetchData();
	}

	componentDidUpdate(prevProps) {
		if (prevProps.chatRoomId !== this.props.chatRoomId) {
			this.fetchData();
		}
	}

	fetchData() {
		if (this.props.chatRoomId === null) return;
		fetch(`http://localhost:8080/api/rooms/${this.props.chatRoomId}`)
			.then((resp) => resp.json())
			.then(({ name, users }) => this.setState({ name, users }));

		fetch(`http://localhost:8080/api/rooms/${this.props.chatRoomId}/messages`)
			.then((resp) => resp.json())
			.then((data) => this.setState({ messages: data }));
	}

	sendMessage(message) {
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
				this.setState((state) => {
					const messages = state.messages.concat(data);
					if (!state.users.includes(currentUser)) {
						return { messages, users: state.users.concat(currentUser) };
					}
					return { messages };
				});
			});
	}

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
