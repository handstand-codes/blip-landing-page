import React from "react";
import * as styles from "./Grid.module.scss";

const Grid = ({ children, className }) => (
  <div className={[styles.grid, className || null].join(` `)}>{children}</div>
);
export default Grid;
