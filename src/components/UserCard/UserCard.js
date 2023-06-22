import React, { useState, useEffect } from "react";
import css from "./UserCard.module.css";

import bg_picture from "./images/bg_picture.png";
import logo from "./images/Logo.png";
import line from "./images/h_line.png";
import avatarFrame from "./images/avatar_circle.png";

const UserCard = ({ user, onFollow, follows }) => {
  const [isFollowed, setIsFollowed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setIsFollowed(follows.some((follow) => follow.id === user.id));
  }, [follows, user.id]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleFollow = () => {
    const updatedFollows = [...follows];
    if (isFollowed) {
      const index = updatedFollows.findIndex((follow) => follow.id === user.id);
      if (index !== -1) {
        updatedFollows.splice(index, 1);
      }
    } else {
      updatedFollows.push({ id: user.id });
    }
    setIsFollowed(!isFollowed);
    onFollow(user.id, !isFollowed, updatedFollows);
  };

  const numberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div className={css.card}>
      <img className={css.bgPicture} src={bg_picture} alt="bgPicture" />
      <img className={css.logo} src={logo} alt="logo" />
      <img className={css.hLine} src={line} alt="line" />
      <img
        className={css.avatar}
        src={user.avatar}
        alt={user.user}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      <img className={css.avatarFrame} src={avatarFrame} alt="avatarFrame" />

      {isHovered && <div className={css.userName}>{user.user}</div>}
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
