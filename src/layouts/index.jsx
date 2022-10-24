import React from "react";
import {
  NoJs,
  Theme,
  ContentContainer,
  HeightDetector,
  StarTwinkle
} from "~components";

/**
 * Global layout that wraps all pages
 */

const Layout = ({ children }) => (
  <>
    <NoJs />
    <Theme />
    <HeightDetector />
    <StarTwinkle />
    <ContentContainer>{children}</ContentContainer>
  </>
);

export default Layout;
