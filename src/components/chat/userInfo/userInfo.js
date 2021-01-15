// import React from 'react';
import Moment from "react-moment";

const UserInfo = ({ name, date }) => {
	return (
		<div className="user-info">
			<div className="current-user">{name}</div>
			<div className="moment-online">
				Online for{" "}
				<Moment fromNow ago>
					{date}
				</Moment>
			</div>
		</div>
	);
};

export default UserInfo;
