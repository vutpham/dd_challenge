const ChatBubble = ({ idx, name, message, isCurrentUser }) => {
	return (
		<div>
			<h3>{name}</h3>
			<h4>{message}</h4>
		</div>
	);
};

export default ChatBubble;
