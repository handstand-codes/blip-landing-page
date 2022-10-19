import React from "react";
import { WidthContainer } from "~components";
import { ReactComponent as Logo } from "~assets/svg/logo-outline.svg";
import { ReactComponent as Arrow } from "~assets/svg/arrow.svg";

import * as styles from "./HeroLogoBlock.module.scss";

const HeroLogoBlock = () => (
  <div className={styles.container}>
    <WidthContainer>
      <div className={styles.contentContainer}>
        <p className={[styles.availableText, `caption`].join(` `)}>
          Available in winter 2022
        </p>
        <div className={styles.logoContainer}>
          <Logo className={styles.logo} />
        </div>
        <div className={styles.arrowButtonContainer}>
          <button type="button" className={styles.arrowButton}>
            <Arrow className={styles.arrow} fill="var(--color-lavendar)" />
          </button>
        </div>
      </div>
    </WidthContainer>
  </div>
);

export default HeroLogoBlock;
