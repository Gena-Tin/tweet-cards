import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import UserCard from "../../components/UserCard/UserCard";
import TweetFilter from "../../components/TweetFilter/TweetFilter";
import { getUsers, updateUser } from "../../api/Api";
import ScrollButton from "../../components/ScrollButton/ScrollButton";
import css from "./Tweets.module.css";
import Loader from "../../components/Loader/Loader";
import { TfiHome, TfiReload } from "react-icons/tfi";

const Tweets = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [filter, setFilter] = useState("show all");
  const [visibleUsers, setVisibleUsers] = useState(3);
  const [isLoading, setIsLoading] = useState(true);
  const [follows, setFollows] = useState([]);

  useEffect(() => {
    const storedFollows = JSON.parse(localStorage.getItem("myFollows"));
    if (storedFollows) {
      setFollows(storedFollows);
    }
  }, []);

  const applyFilter = useCallback(
    (filter, data) => {
      let filteredData = [];

      switch (filter) {
        case "follow":
          filteredData = data.filter((user) =>
            follows.some((follow) => follow.id === user.id)
          );
          break;
        case "followings":
          filteredData = data.filter(
            (user) => !follows.some((follow) => follow.id === user.id)
          );
          break;
        default:
          filteredData = data;
          break;
      }

      setFilteredUsers(filteredData);
    },
    [follows]
  );

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await getUsers();
      setUsers(data);
      applyFilter(filter, data);
      setIsLoading(false);
    };

    fetchUsers();
  }, [filter, applyFilter]);

  const handleFollow = useCallback(
    (userId, isFollowed, updatedFollows) => {
      const updatedUsers = users.map((user) => {
        if (user.id === userId) {
          user.followers += isFollowed ? 1 : -1;
          updateUser(user.id, user);
        }
        return user;
      });

      setUsers(updatedUsers);
      setFollows(updatedFollows);
      localStorage.setItem("myFollows", JSON.stringify(updatedFollows));
      applyFilter(filter, updatedUsers);
    },
    [users, filter, applyFilter]
  );

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
    setVisibleUsers(3);
  };

  const handleLoadMore = () => {
    setVisibleUsers((prevVisibleUsers) => prevVisibleUsers + 3);
  };

  return (
    <div>
      <h2 className={css.title}>Tweets</h2>
      <div className={css.navSection}>
        <Link to="/">
          <button className={css.backButton}>
            <TfiHome /> Back
          </button>
        </Link>
        <TweetFilter filter={filter} onChange={handleFilterChange} />
      </div>
      {isLoading && <Loader />}
      <div className={css.userList}>
        {filteredUsers.slice(0, visibleUsers).map((user) => (
          <UserCard
            key={user.id}
            user={user}
            onFollow={handleFollow}
            follows={follows}
          />
        ))}
      </div>
      {visibleUsers < filteredUsers.length ? (
        <button className={css.loadMoreButton} onClick={handleLoadMore}>
          Load More <TfiReload />
        </button>
      ) : (
        <h2 className={css.endOfList}>End of List</h2>
      )}
      <ScrollButton />
    </div>
  );
};

export default Tweets;
