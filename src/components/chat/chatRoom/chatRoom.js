import React from 'react';
import ChatRoomHeader from './chatRoomHeader';

class ChatRoom extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    console.log("messages mounted!");
  }

  render() {
    return (<div>
      <ChatRoomHeader name="name" users={["a", "b", "c"]} />
    </div>)
  }
}

export default ChatRoom;