import React, { useState, useEffect } from "react";

const UserCard = ({ user, onFollow }) => {
  const [isFollowed, setIsFollowed] = useState(false);

  useEffect(() => {
    setIsFollowed(localStorage.getItem(user.id) === "true");
  }, [user.id]);

  const handleFollow = () => {
    const updatedFollowed = !isFollowed;
    setIsFollowed(updatedFollowed);
    onFollow(user.id, updatedFollowed);
  };

  return (
    <div className="user-card">
      <img src={user.avatar} alt={user.user} />
      <h3>{user.user}</h3>
      <p>Tweets: {user.tweets}</p>
      <p>Followers: {user.followers.toLocaleString()}</p>
      <button onClick={handleFollow} className={isFollowed ? "followed" : ""}>
        {isFollowed ? "Following" : "Follow"}
      </button>
    </div>
  );
};

export default UserCard;
