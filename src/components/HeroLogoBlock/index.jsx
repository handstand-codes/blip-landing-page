import React from "react";
import { WidthContainer } from "~components";
import { ReactComponent as Logo } from "~assets/svg/logo-solid.svg";
import { ReactComponent as Arrow } from "~assets/svg/arrow.svg";

import * as styles from "./HeroLogoBlock.module.scss";

const HeroLogoBlock = () => {
  const scrollSignupIntoView = () => {
    const signUpBlock = document.getElementById(`sign-up-block`);
    if (signUpBlock) {
      signUpBlock.scrollIntoView({ behavior: `smooth` });
    }
  };

  return (
    <WidthContainer>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <p className={[styles.availableText, `caption`].join(` `)}>
            Available in winter 2022
          </p>
        </div>
        <div className={styles.logoContainer}>
          <Logo fill="var(--color-lime)" className={styles.logo} />
        </div>
        <div className={styles.arrowButtonContainer}>
          <button
            type="button"
            className={styles.arrowButton}
            onClick={scrollSignupIntoView}
          >
            <Arrow className={styles.arrow} />
          </button>
        </div>
      </div>
    </WidthContainer>
  );
};

export default HeroLogoBlock;
