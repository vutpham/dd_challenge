const ChatRoomsListItem = ({ name, selectChatroom, isSelected }) => {
	return isSelected ? (
		<h2 style={{ color: "blue" }}>{name}</h2>
	) : (
		<h2 onClick={() => selectChatroom()}>{name}</h2>
	);
};

export default ChatRoomsListItem;
