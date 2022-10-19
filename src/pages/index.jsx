import React from "react";
import { SEO, HeroLogoBlock } from "~components";

const Homepage = () => (
  <>
    <HeroLogoBlock />
    <h1>Some other content!</h1>
  </>
);

export default Homepage;

export const Head = () => <SEO />;
