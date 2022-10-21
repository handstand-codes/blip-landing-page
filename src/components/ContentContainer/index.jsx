import React from "react";
import * as styles from "./ContentContainer.module.scss";

const ContentContainer = ({ children, paddingOnly }) => (
  <div
    className={[styles.padding, paddingOnly ? null : styles.container].join(
      ` `
    )}
  >
    <div className={styles.heightProvider}>{children}</div>
  </div>
);

export default ContentContainer;
