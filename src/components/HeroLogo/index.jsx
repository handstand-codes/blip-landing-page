import React from "react";
import { ReactComponent as Logo } from "~assets/svg/logo-solid.svg";

import * as styles from "./HeroLogo.module.scss";

const HeroLogo = () => (
  <div className={styles.container}>
    <Logo className={styles.logo} />
  </div>
);

export default HeroLogo;
