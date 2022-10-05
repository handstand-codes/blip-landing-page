import React from "react";
import { WidthContainer } from "~components";
import { PortableText } from "@portabletext/react";
import * as styles from "./FullWidthText.module.scss";

const FullWidthText = ({
  data: { textContent, backgroundColour, textColour }
}) => (
  <article
    className={styles.container}
    style={{
      background: backgroundColour?.hex || `var(--color-white)`,
      color: textColour?.hex || `var(--color-black-90)`
    }}
  >
    <WidthContainer>
      <div className={[styles.textContent, `b1`].join(` `)}>
        <PortableText value={textContent} />
      </div>
    </WidthContainer>
  </article>
);

export default FullWidthText;
