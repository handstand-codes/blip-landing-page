import React from "react";
import * as styles from "./ContentContainer.module.scss";

const ContentContainer = ({ children, paddingOnly }) => (
  <div
    className={[styles.padding, paddingOnly ? null : styles.container].join(
      ` `
    )}
  >
    <main className={styles.heightProvider}>{children}</main>
  </div>
);

export default ContentContainer;
