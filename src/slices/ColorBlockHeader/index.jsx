import React from "react";
import { WidthContainer } from "~components";
import * as styles from "./ColorBlockHeader.module.scss";

const ColorBlockHeader = ({ data: { title, backgroundColor, textColor } }) => (
  <div className={styles.container}>
    <WidthContainer paddingOnly>
      <div
        className={styles.colorBlock}
        style={{
          backgroundColor: backgroundColor?.hex || `var(--color-blush)`,
          color: textColor?.hex || `var(--color-black-90)`
        }}
      >
        <h1 className={[styles.text, `d2`].join(` `)}>{title}</h1>
      </div>
    </WidthContainer>
  </div>
);

export default ColorBlockHeader;
