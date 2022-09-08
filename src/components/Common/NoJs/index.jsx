import React from "react";
import styled from "@emotion/styled";
import { Link } from "~components";

const Container = styled.div`
  text-align: center;
  padding: 20px;
  & > a {
    text-decoration: underline;
  }
`;

const NoJs = () => (
  <noscript>
    <Container>
      For full functionality of this site it is necessary to enable JavaScript.
      Here are the{` `}
      <Link to="https://www.enable-javascript.com/" ariaLabel="Enable JS">
        instructions how to enable JavaScript in your web browser.
      </Link>
    </Container>
  </noscript>
);

export default NoJs;
