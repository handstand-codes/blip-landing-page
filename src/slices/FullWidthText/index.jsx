import React from "react";
import { WidthContainer } from "~components";
import { PortableText } from "@portabletext/react";
import * as styles from "./FullWidthText.module.scss";

const FullWidthText = ({
  data: { textContent, backgroundColor, textColor }
}) => (
  <article
    className={styles.container}
    style={{
      background: backgroundColor?.hex || `var(--color-white)`,
      color: textColor?.hex || `var(--color-black-90)`
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
