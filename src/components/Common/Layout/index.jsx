/* eslint-disable react/jsx-props-no-spreading */

import React from "react";
import styled from "@emotion/styled";
import {
  Footer,
  Header,
  HeightDetector,
  Menu,
  SEO,
  NoJs,
  Theme
} from "~components";
import { breakpoint } from "~utils/css.js";

/** ============================================================================
 * @css
 */

const Main = styled.main`
  width: 100%;
  position: relative;
  padding-top: 52px;
  ${breakpoint(`large-tablet`, `min`)} {
    padding-top: 0;
  }
`;

/** ============================================================================
 * @component Core template wrapper.
 */
const Layout = ({ children, className, seo, location }) => (
  <>
    <NoJs />

    <HeightDetector />

    <Theme />

    <Menu />

    <Header />

    <Main className={className}>
      <SEO {...seo} location={location} />

      {children}
    </Main>

    <Footer />
  </>
);

export default Layout;
