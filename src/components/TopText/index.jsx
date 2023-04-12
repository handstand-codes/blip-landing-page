import React from "react";
import * as styles from "./TopText.module.scss";

const TopText = () => (
  <p className={[styles.text, `caption`].join(` `)}>Coming soon</p>
);

export default TopText;
