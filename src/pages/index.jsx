import React from "react";
import { SEO, HeroLogoBlock, SignUpBlock } from "~components";

const Homepage = () => (
  <>
    <HeroLogoBlock />
    <SignUpBlock />
  </>
);

export default Homepage;

export const Head = () => <SEO />;
