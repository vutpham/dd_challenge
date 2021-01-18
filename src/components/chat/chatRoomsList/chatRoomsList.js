import React from "react";
import ChatRoomsListItem from "./chatRoomsListItem";
import UserInfo from "../userInfo/userInfo";

class ChatRoomsList extends React.Component {
	constructor(props) {
		super(props);
		this.state = { rooms: [] };
	}

	componentDidMount() {
		fetch("http://localhost:8080/api/rooms")
			.then((resp) => resp.json())
			.then((data) => this.setState({ rooms: data }));
	}

	componentDidUpdate(prevProps) {
		const { selectChatroom } = this.props;
		if (prevProps.currentRoomId === null && this.state.rooms.length > 0) {
			selectChatroom(0);
		}
	}

	displayChatrooms = () => {
		const { currentRoomId, selectChatroom } = this.props;
		return this.state.rooms.map(({ name, id }) => (
			<ChatRoomsListItem
				key={id}
				name={name}
				selectChatroom={() => selectChatroom(id)}
				isSelected={id === currentRoomId}
			/>
		));
	};

	render() {
		const { name, date } = this.props;
		return (
			<div className="chatrooms-list">
				<UserInfo name={name} date={date} />
				{this.displayChatrooms()}
			</div>
		);
	}
}

export default ChatRoomsList;
