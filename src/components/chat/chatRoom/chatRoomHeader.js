const ChatRoomHeader = ({name, users}) => {
  return (
    <div>
      <h2>{name}</h2>
      <h3>{users.join(", ")}</h3>
    </div>
  )
}

export default ChatRoomHeader;