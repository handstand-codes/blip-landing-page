import React from "react";
import { NoJs, Theme, ContentContainer } from "~components";

/**
 * Global layout that wraps all pages
 */

const Layout = ({ children }) => (
  <>
    <NoJs />
    <Theme />
    <ContentContainer>{children}</ContentContainer>
  </>
);

export default Layout;
