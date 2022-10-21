import React from "react";
import {
  NoJs,
  Theme,
  ContentContainer,
  HeightDetector,
  StarHoverTrail,
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
    {/* <StarHoverTrail /> */}
  </>
);

export default Layout;
