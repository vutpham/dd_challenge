const ChatRoomsListItem = ({ name, selectChatroom, isSelected }) => {
	return (
		<div
			className={`chatroom-list-item ${isSelected ? "selected" : ""}`}
			onClick={() => selectChatroom()}
		>
			{name}
		</div>
	);
};

export default ChatRoomsListItem;
