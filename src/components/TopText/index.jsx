import React from "react";
import * as styles from "./TopText.module.scss";

const TopText = () => (
  <p className={[styles.text, `caption`].join(` `)}>Available in winter 2022</p>
);

export default TopText;
