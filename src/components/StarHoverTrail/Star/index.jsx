import React from "react";
import { ReactComponent as StarIcon } from "~assets/svg/bg-star.svg";
import * as styles from "./Star.module.scss";

const Star = () => (
  <div className={styles.container}>
    <StarIcon className={styles.icon} />
  </div>
);

export default Star;
