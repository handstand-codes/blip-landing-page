import React from "react";
import {
  SEO,
  HeroLogo,
  SignUp,
  SocialLogos,
  TopText,
  MainText,
  FillAvailableHeight
} from "~components";

const Homepage = () => (
  <>
    <TopText />
    <FillAvailableHeight>
      <HeroLogo />
      <MainText />
      <SignUp />
      <SocialLogos />
    </FillAvailableHeight>
  </>
);

export default Homepage;

export const Head = () => <SEO />;
