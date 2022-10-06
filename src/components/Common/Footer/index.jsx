import React from "react";
import { Link, WidthContainer, Grid, TextInput } from "~components";
import { ReactComponent as Wordmark } from "~assets/svg/logos/logo.svg";
import { css } from "@emotion/react";
import * as styles from "./Footer.module.scss";

const Footer = () => (
  <footer className={styles.footer}>
    <WidthContainer paddingOnly>
      <Grid className={styles.content}>
        <div className={styles.newsletter}>
          <form>
            <label htmlFor="newsletter_signup_input" className="b1">
              Sign up for Newsletters
              <TextInput
                id="newsletter_signup_input"
                placeholder="Your email here"
                bgColor="var(--color-classic-black)"
                textColor="var(--color-white)"
                borderColor="var(--color-white)"
                placeholderColor="var(--color-black-20)"
                onClick={() => {}}
              />
            </label>
          </form>
        </div>
        <nav className={styles.nav}>
          <ul className={styles.nav__ul}>
            <li className="b1">
              <Link to="/faqs">FAQs</Link>
            </li>
            <li className="b1">
              <Link to="/">About</Link>
            </li>
            <li className="b1">
              <Link to="/">Contact</Link>
            </li>
          </ul>
          <ul className={styles.nav__ul}>
            <li className="b1">
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
            <li className="b1">
              <Link to="/terms-of-service">Terms of Service</Link>
            </li>
          </ul>
          <ul className={styles.nav__ul}>
            <li className="b1">
              <Link to="/">Facebook</Link>
            </li>
            <li className="b1">
              <Link to="/">Instagram</Link>
            </li>
            <li className="b1">
              <Link to="/">YouTube</Link>
            </li>
          </ul>
        </nav>
      </Grid>
      <div className={styles.logo}>
        <Wordmark
          fill="white"
          css={css`
            width: 100%;
          `}
        />
      </div>
      <div className={styles.bottomText}>
        <span className="caption">© Loungeface {new Date().getFullYear()}</span>
        <a className="caption" href="/">
          Made with{` `}
          <span className={styles.bottomText__desktop}>Love</span>
          <span className={styles.bottomText__mobile}>{`<3`}</span>
          {` + `}
          <span className={styles.bottomText__desktop}>Money</span>
          <span className={styles.bottomText__mobile}>$</span>
        </a>
      </div>
    </WidthContainer>
  </footer>
);

export default Footer;
