import React from "react";
import { WidthContainer } from "~components";
import * as styles from "./ColourBlockHeader.module.scss";

const ColourBlockHeader = ({
  data: { title, backgroundColour, textColour }
}) => (
  <div className={styles.container}>
    <WidthContainer paddingOnly>
      <div
        className={styles.colourBlock}
        style={{
          backgroundColor: backgroundColour?.hex || `var(--color-blush)`,
          color: textColour?.hex || `var(--color-black-90)`
        }}
      >
        <h1 className={[styles.text, `d2`].join(` `)}>{title}</h1>
      </div>
    </WidthContainer>
  </div>
);

export default ColourBlockHeader;
