// import React from 'react';
import Moment from 'react-moment';

const UserInfo = ({name, date}) => {
  return (
    <div>
      <h3>{name}</h3>
      <h4>Online for <Moment fromNow ago>{date}</Moment></h4>
    </div>
  )
}

export default UserInfo;