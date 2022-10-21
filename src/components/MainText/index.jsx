import React from "react";
import * as styles from "./MainText.module.scss";

const MainText = () => (
  <div className={styles.container}>
    <h1 className="h2">
      Ready to quit? <nobr>Join the club.</nobr>
    </h1>
    <p className="b1">BLIP Club is coming. Sign up to be the first to know.</p>
  </div>
);

export default MainText;
