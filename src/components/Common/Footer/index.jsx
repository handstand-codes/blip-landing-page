import React, { useState } from "react";
import {
  ListLinks,
  WidthContainer,
  Grid,
  TextInput,
  WordCarousel
} from "~components";
import { ReactComponent as Wordmark } from "~assets/svg/logos/wordmark.svg";
import regex from "~constants/regex";
import { css } from "@emotion/react";
import * as styles from "./Footer.module.scss";

const Footer = ({ settings }) => {
  const [inputValue, setInputValue] = useState(``);
  const [hasValidationError, setHasValidationError] = useState(false);
  const [hasAPIError, setHasAPIError] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (value) => {
    if (hasSubmitted) return;
    setInputValue(value);
    setHasValidationError(false);
    setHasAPIError(false);
  };

  const handleSubmit = async () => {
    if (hasSubmitted || isSubmitting) return;
    if (!regex.email.test(inputValue)) {
      setHasValidationError(true);
    } else {
      setIsSubmitting(true);
      try {
        const response = await fetch(`/api/subscribe-to-newsletter`, {
          method: `POST`,
          headers: {
            "content-type": `application/json`
          },
          body: JSON.stringify({
            profiles: [{ email: inputValue }]
          })
        });
        const data = await response.json();
        setIsSubmitting(false);
        if (data.statusCode === 500) {
          throw new Error(data.body.code);
        }
        setHasSubmitted(true);
      } catch (err) {
        console.error(err);
        setHasAPIError(true);
        setInputValue(``);
      }
    }
  };

  return (
    <>
      <footer className={styles.footer}>
        <WidthContainer paddingOnly>
          <Grid className={styles.content}>
            <div className={styles.newsletter}>
              <label className="b1" htmlFor="newsletter_signup_input">
                <span className={styles.newsletter__CTA}>
                  {settings?.newsletterSignup.label}
                </span>
                <div
                  className={[
                    styles.inputContainer,
                    hasSubmitted ? styles.submitted : null
                  ].join(` `)}
                >
                  <TextInput
                    id="newsletter_signup_input"
                    placeholder={settings?.newsletterSignup.placeholder}
                    onClick={handleSubmit}
                    isDarkTheme
                    className={styles.input}
                    onChange={handleChange}
                    value={inputValue}
                    onEnter={handleSubmit}
                    hasError={hasValidationError}
                  />
                  <p className={[`b2`, styles.successMessage].join(` `)}>
                    {settings?.newsletterSignup.successMessage}
                  </p>
                </div>
              </label>
              {hasAPIError && (
                <span className={[`b2`].join(` `)}>
                  Something went wrong, please try again later.
                </span>
              )}
            </div>
            <nav className={styles.nav}>
              <ul className={[styles.nav__ul, `b1`].join(` `)}>
                <ListLinks links={settings?.linksColumn1} />
              </ul>
              <ul className={[styles.nav__ul, `b1`].join(` `)}>
                <ListLinks links={settings?.linksColumn2} />
              </ul>
              <ul className={[styles.nav__ul, `b1`].join(` `)}>
                <ListLinks links={settings?.linksColumn3} />
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
      <WordCarousel phrases={settings?.scrollingPhrases} />
    </>
  );
};

export default Footer;
