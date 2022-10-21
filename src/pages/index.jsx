import React from "react";
import { SEO, HeroLogoBlock, SignUp, SocialLogos } from "~components";

const Homepage = () => (
  <>
    <HeroLogoBlock />
    <SignUp />
    <SocialLogos />
  </>
);

export default Homepage;

export const Head = () => <SEO />;
