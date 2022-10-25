import React from "react";
import { Link } from "gatsby";
import { SEO, FillAvailableHeight, HeroLogo } from "~components";
import * as styles from "./404.module.scss";

const FourOhFour = () => (
  <FillAvailableHeight>
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <HeroLogo />
      </div>
      <h2 className={[`h1`, styles.header].join(` `)}>
        Sorry, this page doesn&apos;t exist.
      </h2>
      <Link className={[`b1`, styles.homeLink].join(` `)} to="/">
        Back to home
      </Link>
    </div>
  </FillAvailableHeight>
);

export default FourOhFour;

export const Head = () => <SEO />;
