import React, { useState, useEffect } from "react";
import css from "./ScrollButton.module.css";
import { TfiAngleUp } from "react-icons/tfi";

const ScrollButton = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  const handleScroll = () => {
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    setShowScrollButton(scrollTop > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showScrollButton && (
        <button className={css.scrollButton} onClick={handleScrollToTop}>
          <TfiAngleUp />
        </button>
      )}
    </>
  );
};

export default ScrollButton;
