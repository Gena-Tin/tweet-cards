import React, { useState, useEffect } from "react";
import css from "./UserCard.module.css";

import bg_picture from "./images/bg_picture.png";
import logo from "./images/Logo.png";
import line from "./images/h_line.png";
import avatarFrame from "./images/avatar_circle.png";

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

  const numberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div className={css.card}>
      <img className={css.bgPicture} src={bg_picture} alt="bgPicture" />
      <img className={css.logo} src={logo} alt="logo" />
      <img className={css.hLine} src={line} alt="line" />
      <img className={css.avatar} src={user.avatar} alt={user.user} />
      <img className={css.avatarFrame} src={avatarFrame} alt="avatarFrame" />

      {/* <h3 className={css.userName}>{user.user}</h3> */}
      <p className={css.tweets}> {user.tweets} Tweets</p>
      <p className={css.followers}>
        {numberWithCommas(user.followers)} Followers
      </p>

      <button
        onClick={handleFollow}
        className={css.followButton}
        style={{ backgroundColor: isFollowed ? "#5CD3A8" : "" }}
      >
        {isFollowed ? "Following" : "Follow"}
      </button>
    </div>
  );
};

export default UserCard;
