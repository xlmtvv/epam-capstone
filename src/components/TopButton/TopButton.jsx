import React, { useState, useEffect } from "react";
import styles from "./TopButton.module.scss";

export function TopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={`${styles.backToTopButton} ${visible ? styles.show : ""}`}
      onClick={scrollToTop}
    >
      &#x2191; 
    </button>
  );
}
