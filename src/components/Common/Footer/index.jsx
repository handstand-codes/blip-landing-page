import React from "react";
import { Link, WidthContainer } from "~components";
import { ReactComponent as Wordmark } from "~assets/svg/logos/logo.svg";
import { css } from "@emotion/react";
import * as styles from "./Footer.module.scss";

const Footer = () => (
  <footer className={styles.footer}>
    <WidthContainer>
      {/* This is flex on desktop */}
      <div className={styles.content}>
        <div className={styles.newsletter}>
          <form>
            <label className="b1">
              Sign up for Newsletters
              <input
                className={styles.newsletter__input}
                type="text"
                placeholder="Your email here"
              />
            </label>
          </form>
        </div>
        <nav className={styles.nav}>
          <ul className={styles.nav__ul}>
            <li className="b1">
              <Link to="/">FAQs</Link>
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
              <Link to="/">Privacy Policy</Link>
            </li>
            <li className="b1">
              <Link to="/">Terms of Use</Link>
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
      </div>
      <div className={styles.logo}>
        <Wordmark
          fill="white"
          css={css`
            width: 100%;
          `}
        />
      </div>
      <div className={styles.bottomText}>
        <span className="caption">
          © Love & Money {new Date().getFullYear()}
        </span>
        <a className="caption" href="/">
          Made with Love + Money
        </a>
      </div>
    </WidthContainer>
  </footer>
);

export default Footer;
