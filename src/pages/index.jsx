import React from "react";
import { SEO } from "~components";

const Homepage = () => (
  <div
    style={{
      display: `flex`,
      height: `200px`,
      alignItems: `center`,
      justifyContent: `center`
    }}
  >
    <h1>Made with Love + Money</h1>
  </div>
);

export default Homepage;

export const Head = () => <SEO />;
