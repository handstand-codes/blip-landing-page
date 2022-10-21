import React from "react";
import * as styles from "./FillAvailableHeight.module.scss";

const FillAvailableHeight = ({ children }) => (
  <div className={styles.container}>{children}</div>
);

export default FillAvailableHeight;
