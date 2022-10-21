import React from "react";
import { HeightDetector, NoJs, Theme, WidthContainer } from "~components";

import * as styles from "./Layout.module.scss";

/**
 * Global layout that wraps all pages
 */

const Layout = ({ children }) => (
  <>
    <NoJs />
    <HeightDetector />
    <Theme />

    <WidthContainer>
      <div className={styles.container}>{children}</div>
    </WidthContainer>
  </>
);

export default Layout;
