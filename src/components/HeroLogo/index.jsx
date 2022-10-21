import React from "react";
import { WidthContainer } from "~components";
import { ReactComponent as Logo } from "~assets/svg/logo-solid.svg";

import * as styles from "./HeroLogo.module.scss";

const HeroLogo = () => (
  <WidthContainer>
    <div className={styles.container}>
      <Logo fill="var(--color-lime)" className={styles.logo} />
    </div>
  </WidthContainer>
);

export default HeroLogo;
