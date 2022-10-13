import React, { useState } from "react";
import {
  ListLinks,
  WidthContainer,
  Grid,
  TextInput,
  WordCarousel
} from "~components";
import { ReactComponent as Wordmark } from "~assets/svg/logos/logo.svg";
import regex from "~constants/regex";
import { css } from "@emotion/react";
import * as styles from "./Footer.module.scss";

const Footer = ({ settings }) => {
  const [inputValue, setInputValue] = useState(``);
  const [hasError, setHasError] = useState(false);

  const handleChange = (value) => {
    setInputValue(value);
    setHasError(false);
  };

  const handleSubmit = () => {
    if (!regex.email.test(inputValue)) {
      setHasError(true);
    } else {
      // Do something with value
      console.log(inputValue);
    }
  };

  return (
    <>
      <footer className={styles.footer}>
        <WidthContainer paddingOnly>
          <Grid className={styles.content}>
            <div className={styles.newsletter}>
              <label htmlFor="newsletter_signup_input" className="b1">
                <span className={styles.newsletter__CTA}>
                  Sign up for Newsletters
                </span>
                <TextInput
                  id="newsletter_signup_input"
                  placeholder="Your email here"
                  onClick={handleSubmit}
                  isDarkTheme
                  onChange={handleChange}
                  value={inputValue}
                  onEnter={handleSubmit}
                  hasError={hasError}
                />
              </label>
            </div>
            <nav className={styles.nav}>
              <ul className={[styles.nav__ul, `b1`].join(` `)}>
                <ListLinks links={settings.linksColumn1} />
              </ul>
              <ul className={[styles.nav__ul, `b1`].join(` `)}>
                <ListLinks links={settings.linksColumn2} />
              </ul>
              <ul className={[styles.nav__ul, `b1`].join(` `)}>
                <ListLinks links={settings.linksColumn3} />
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
            <span className="caption">
              © Loungeface {new Date().getFullYear()}
            </span>
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
      <WordCarousel phrases={settings.scrollingPhrases} />
    </>
  );
};

export default Footer;
