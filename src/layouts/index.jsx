/* eslint-disable react/jsx-props-no-spreading */

import React from "react";
import { HeightDetector, SEO, NoJs, Theme } from "~components";

import * as styles from "./Layout.module.scss";

const Layout = ({ children, className, seo, location }) => (
  <>
    <NoJs />

    <HeightDetector />

    <Theme />

    <div className={[styles.container, className].join(` `)}>
      <SEO {...seo} location={location} />
      {children}
    </div>
  </>
);

export default Layout;
