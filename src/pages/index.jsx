import React from "react";
import {
  SEO,
  HeroLogo,
  SignUp,
  SocialLogos,
  AvailableText,
  MainText
} from "~components";

const Homepage = () => (
  <>
    <AvailableText />
    <HeroLogo />
    <MainText />
    <SignUp />
    <SocialLogos />
  </>
);

export default Homepage;

export const Head = () => <SEO />;
