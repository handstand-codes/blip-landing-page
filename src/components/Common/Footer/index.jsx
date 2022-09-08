import React from "react";
import styled from "@emotion/styled";
import { Grid, Link } from "~components";
import { breakpoint } from "~utils/css.js";

const Container = styled.footer`
  background: var(--color-classic-black);
  color: var(--color-white);
  padding: 34px 0;
`;

const Copyright = styled.p`
  grid-column: span 24;
  margin-top: 209px;

  ${breakpoint(`tablet`, `max`)} {
    margin-top: 64px;
  }
`;

const LinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  & > a {
    color: var(--color-white);
  }
`;

const Newsletter = styled.article`
  grid-column: span 12;
  flex-direction: column;

  & > p {
    margin: 0;
  }

  ${breakpoint(`tablet`, `max`)} {
    margin-bottom: 64px;
    grid-column: span 24;
  }
`;

const SiteMap = styled.article`
  grid-column: span 12;
  display: flex;
  justify-content: space-around;

  ${breakpoint(`tablet`, `max`)} {
    grid-column: span 24;
    justify-content: space-between;
  }

  ${breakpoint(`large-mobile`, `max`)} {
    flex-direction: column;
    gap: 64px;
  }
`;

const Footer = () => (
  <Container className="b1">
    <Grid>
      <Newsletter>
        <p>Sign up for Newsletters</p>
      </Newsletter>

      <SiteMap>
        <LinkWrapper>
          <Link to="/">Section</Link>
          <Link to="/">Section</Link>
          <Link to="/">Section</Link>
          <Link to="/">Section</Link>
        </LinkWrapper>

        <LinkWrapper>
          <Link to="/">About</Link>
          <Link to="/">Shipping and Returns</Link>
          <Link to="/">Privacy</Link>
          <Link to="/">Terms & Conditions</Link>
        </LinkWrapper>

        <LinkWrapper>
          <Link to="/">Social Media</Link>
          <Link to="/">Social Media</Link>
          <Link to="/">Social Media</Link>
        </LinkWrapper>
      </SiteMap>

      <Copyright>© Love & Money {new Date().getFullYear()}</Copyright>
    </Grid>
  </Container>
);

export default Footer;
