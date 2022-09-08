/* eslint-disable react/jsx-props-no-spreading */

import React from "react";
import styled from "@emotion/styled";
import { Header, Menu, Sidebar, SEO, NoJs, Theme } from "~components";
import { breakpoint } from "~utils/css.js";

/** ============================================================================
 * @css
 */
const Container = styled.div`
  width: 100%;
  position: relative;
  display: flex;
`;

const Main = styled.main`
  width: 100%;
  position: relative;
  padding: 32px 32px 208px;
  background-color: var(--color-black);
  overflow: hidden;

  ${breakpoint(`large-tablet`)} {
    width: calc(100% - 268px);
    padding-top: 0;
    padding-left: 16px;
  }
`;

/** ============================================================================
 * @component Core template wrapper.
 */
const Layout = ({ children, className, seo, location, menu }) => (
  <>
    <Container>
      <Theme />

      <Header />

      {menu && <Menu data={menu} />}
      {menu && <Sidebar data={menu} />}

      <NoJs />

      <Main className={className}>
        <SEO {...seo} location={location} />

        {children}
      </Main>
    </Container>

    {/* <Footer /> */}
  </>
);

export default Layout;
