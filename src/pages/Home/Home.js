import React from "react";
import { Link } from "react-router-dom";
import hero from "./image/homeBg.png";
import css from "./Home.module.css";
import { TfiTwitterAlt } from "react-icons/tfi";

const Home = () => {
  return (
    <div>
      <h2 className={css.title}>Welcome to tweets</h2>
      <img className={css.heroImg} src={hero} alt="hero" />
      <Link to="/tweets">
        <button className={css.goToTweetsBtn}>
          Go to Tweets <TfiTwitterAlt />
        </button>
      </Link>
    </div>
  );
};

export default Home;
