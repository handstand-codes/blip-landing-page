import React from "react";
import {
  HeightDetector,
  NoJs,
  Theme,
  StarSparkleBackground
} from "~components";
import "../styles/global.css";

import * as styles from "./Layout.module.scss";

/**
 * Global layout that wraps all pages
 */

const Layout = ({ children }) => (
  <>
    <NoJs />
    <HeightDetector />
    <Theme />

    <div className={styles.container}>
      {children}
      <StarSparkleBackground />
    </div>
  </>
);

export default Layout;
