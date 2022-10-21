import React from "react";
import { SEO, HeroLogo, SignUp, SocialLogos, AvailableText } from "~components";

const Homepage = () => (
  <>
    <AvailableText />
    <HeroLogo />
    <SignUp />
    <SocialLogos />
  </>
);

export default Homepage;

export const Head = () => <SEO />;
