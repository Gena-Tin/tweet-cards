import React from "react";

const TweetFilter = ({ filter, onChange }) => {
  return (
    <div className="tweet-filter">
      <label htmlFor="filter-select">Filter:</label>
      <select id="filter-select" value={filter} onChange={onChange}>
        <option value="show all">Show All</option>
        <option value="follow">Followings</option>
        <option value="followings">Follow</option>
      </select>
    </div>
  );
};

export default TweetFilter;
