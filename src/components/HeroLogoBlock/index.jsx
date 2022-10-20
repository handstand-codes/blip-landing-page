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
    <div className={styles.container}>
      <WidthContainer>
        <div className={styles.contentContainer}>
          <p className={[styles.availableText, `caption`].join(` `)}>
            Available in winter 2022
          </p>
          <div className={styles.logoContainer}>
            <Logo fill="var(--color-lime)" className={styles.logo} />
          </div>
          <div className={styles.arrowButtonContainer}>
            <button
              type="button"
              className={styles.arrowButton}
              onClick={scrollSignupIntoView}
            >
              <Arrow className={styles.arrow} fill="var(--color-lavendar)" />
            </button>
          </div>
        </div>
      </WidthContainer>
    </div>
  );
};

export default HeroLogoBlock;
