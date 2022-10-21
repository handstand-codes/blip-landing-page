import React from "react";
import * as styles from "./AvailableText.module.scss";

const AvailableText = () => (
  <p className={[styles.text, `caption`].join(` `)}>Available in winter 2022</p>
);

export default AvailableText;
