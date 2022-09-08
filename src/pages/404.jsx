import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Button, Layout } from "~components";
import { breakpoint } from "~utils/css.js";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  color: var(--color-white);
`;

const FourOhFour = ({ location }) => (
  <Layout
    location={location}
    css={css`
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;

      ${breakpoint(`large-tablet`)} {
        width: calc(100%);
      }
    `}
  >
    <Container>
      <h2 className="h1">This page doesn't exist.</h2>
      <Button to="/" title="Back to home">
        <span>Back to home</span>
      </Button>
    </Container>
  </Layout>
);

export default FourOhFour;
