import React from "react";
import { Link } from "react-router-dom";
import hero from "./image/homeBg.png";
import css from "./Home.module.css";

const Home = () => {
  return (
    <div>
      <h2 className={css.title}>Welcome to tweets</h2>
      <img className={css.heroImg} src={hero} alt="hero" />
      <Link to="/tweets">
        <button className={css.goToTweetsBtn}>Go to Tweets &#10148;</button>
      </Link>
    </div>
  );
};

export default Home;
