const ChatRoomHeader = ({ name, users, currentUser }) => {
	const formattedUsers = users.map((user) => {
		return user === currentUser
			? `<span class="active-user">${user}</span>`
			: user;
	});

	return (
		<div className="chatroom-header">
			<div className="chatroom-name">{name}</div>
			<div
				className="chatroom-users"
				dangerouslySetInnerHTML={{ __html: formattedUsers.join(", ") }}
			/>
		</div>
	);
};

export default ChatRoomHeader;
