import React from "react";
import {
  NoJs,
  Theme,
  ContentContainer,
  HeightDetector,
  StarHoverTrail,
  StarTwinkle,
  StarCanvas
} from "~components";

/**
 * Global layout that wraps all pages
 */

const Layout = ({ children }) => (
  <>
    <NoJs />
    <Theme />
    <HeightDetector />
    {/* <StarTwinkle /> */}
    <StarCanvas />
    <ContentContainer>{children}</ContentContainer>
    {/* <StarHoverTrail /> */}
  </>
);

export default Layout;
