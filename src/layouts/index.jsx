/* eslint-disable react/jsx-props-no-spreading */

import React from "react";
import { Footer, Header, HeightDetector, SEO, NoJs, Theme } from "~components";
import { useAppContext } from "~hooks";

import * as styles from "./Layout.module.scss";

const Layout = ({ children, className, seo, location }) => {
  const { globalSettings } = useAppContext();

  return (
    <>
      <NoJs />

      <HeightDetector />

      <Theme />

      <Header menu={globalSettings?.menu} />

      <div className={[styles.container, className].join(` `)}>
        <SEO {...seo} location={location} />

        {children}
      </div>

      <Footer settings={globalSettings?.footer} />
    </>
  );
};

export default Layout;
