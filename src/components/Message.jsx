import React from "react";

const Message = () => {
  return (
    <div className="message owner">
      <div className="messgaeInfo">
        <img
          src="https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=300"
          alt=""
        />
        <span>just now</span>
      </div>

      <div className="messageContent">
        <p>hello</p>
        <img
          src="https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=300"
          alt=""
        />
      </div>
    </div>
  );
};

export default Message;
