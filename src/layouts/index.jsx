import React from "react";
import { NoJs, Theme, ContentContainer, HeightDetector } from "~components";

/**
 * Global layout that wraps all pages
 */

const Layout = ({ children }) => (
  <>
    <NoJs />
    <Theme />
    <HeightDetector />

    <ContentContainer>{children}</ContentContainer>
  </>
);

export default Layout;
