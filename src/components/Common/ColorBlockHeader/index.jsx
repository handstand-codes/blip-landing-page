import React from "react";
import * as styles from "./ColorBlockHeader.module.scss";

const ColorBlockHeader = ({
  text,
  blockColor = `#F58C90`,
  textColor = `#1E1E1E`,
  className
}) => (
  <div
    className={[styles.colorBlock, className || null].join(` `)}
    style={{ color: textColor, backgroundColor: blockColor }}
  >
    <h1 className={[styles.text, `d2`].join(` `)}>{text}</h1>
  </div>
);

export default ColorBlockHeader;
