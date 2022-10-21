import React, { useState } from "react";
import { WidthContainer } from "~components";
import regex from "~constants/regex";
import * as styles from "./SignUp.module.scss";

const SignUp = () => {
  const [inputValue, setInputValue] = useState(``);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [hasApiError, setHasApiError] = useState(false);
  const [hasValidationError, setHasValidationError] = useState(false);

  const handleChange = (e) => {
    if (hasSubmitted) return;
    setInputValue(e.target.value);
    setHasValidationError(false);
    setHasApiError(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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
        setHasApiError(true);
      }
    }
  };

  return (
    <WidthContainer>
      <div className={styles.container} id="sign-up-block">
        <form onSubmit={handleSubmit}>
          <input
            value={inputValue}
            onChange={handleChange}
            type="text"
            className={[
              styles.input,
              hasValidationError ? styles.error : null
            ].join(` `)}
            placeholder="Your journey stars here."
          />
          <button
            type="submit"
            className={[`button-text`, styles.signUpButton].join(` `)}
          >
            {hasSubmitted ? `Thanks` : `Sign up`}
          </button>
        </form>
      </div>
    </WidthContainer>
  );
};

export default SignUp;
