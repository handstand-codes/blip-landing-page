import React from "react";
import { HeightDetector, NoJs, Theme } from "~components";

import * as styles from "./Layout.module.scss";

/**
 * Global layout that wraps all pages
 */

const Layout = ({ children }) => (
  <>
    <NoJs />
    <HeightDetector />
    <Theme />

    <div className={styles.container}>{children}</div>
  </>
);

export default Layout;
