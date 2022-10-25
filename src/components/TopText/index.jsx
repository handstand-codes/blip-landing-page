import React from "react";
import * as styles from "./TopText.module.scss";

const TopText = () => (
  <p className={[styles.text, `caption`].join(` `)}>Available in early 2023</p>
);

export default TopText;
