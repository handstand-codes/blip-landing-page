import React, { useEffect, useState, useRef } from "react";
import { ReactComponent as StarIcon } from "~assets/svg/bg-star.svg";
import * as styles from "./Star.module.scss";

const Star = ({ odds, freq }) => {
  const [activeColor, setActiveColor] = useState(null);

  const shouldActivate = () => {
    const randomNumber = Math.ceil(Math.random() * odds);
    return randomNumber === odds;
  };

  const getRandomColor = () => {
    const colors = [`pink`, `lavendar`, `orange`];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (shouldActivate()) {
        setActiveColor(getRandomColor());
      }
    }, freq);
    return () => clearInterval(interval);
  }, []);

  const timeoutRef = useRef();
  useEffect(() => {
    if (activeColor) {
      timeoutRef.current = setTimeout(() => setActiveColor(null), 100);
    }
    return () => clearTimeout(timeoutRef.current);
  }, [activeColor]);

  return (
    <div className={styles.container}>
      <StarIcon
        className={[styles.icon, activeColor ? styles[activeColor] : null].join(
          ` `
        )}
      />
    </div>
  );
};

export default Star;
