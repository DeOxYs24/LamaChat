import React from "react";

const navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Lama Chat</span>
      <div className="user">
        <img
          src="https://images.pexels.com/photos/267761/pexels-photo-267761.jpeg?auto=compress&cs=tinysrgb&w=300"
          alt="profile pic"
        />
        <span>Saheel</span>
        <button>logout</button>
      </div>
    </div>
  );
};

export default navbar;
