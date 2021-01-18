const ChatRoomMessage = ({ hidden, name, message, isCurrentUser }) => {
	return (
		<div className="chat-bubble">
			{!hidden && <div className="sender-name">{name}</div>}
			<div className={`message ${isCurrentUser ? "owner" : ""}`}>{message}</div>
		</div>
	);
};

export default ChatRoomMessage;
