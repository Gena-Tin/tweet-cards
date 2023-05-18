import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h2>Home</h2>
      <Link to="/tweets">Go to Tweets</Link>
      <p>Welcome to the Home page!</p>
    </div>
  );
};

export default Home;
