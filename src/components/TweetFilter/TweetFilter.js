import React from "react";
import css from "./TweetFilter.module.css";

const TweetFilter = ({ filter, onChange }) => {
  return (
    <div className="tweet-filter">
      <select
        className={css.filterSelect}
        id="filter-select"
        value={filter}
        onChange={onChange}
      >
        <option value="show all">Show All</option>
        <option value="follow">Followings</option>
        <option value="followings">Follow</option>
      </select>
    </div>
  );
};

export default TweetFilter;
