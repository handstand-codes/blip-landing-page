import React from "react";
import { WidthContainer } from "~components";
import { PortableText } from "@portabletext/react";
import * as styles from "./FullWidthText.module.scss";

const FullWidthText = ({
  data: {
    textContent,
    backgroundColour = `var(--color-white)`,
    fontColour = `var(--color-black)`
  }
}) => (
  <article
    className={styles.container}
    style={{ background: backgroundColour, color: fontColour }}
  >
    <WidthContainer>
      <div className={[styles.textContent, `b1`].join(` `)}>
        <PortableText value={textContent} />
      </div>
    </WidthContainer>
  </article>
);

export default FullWidthText;
