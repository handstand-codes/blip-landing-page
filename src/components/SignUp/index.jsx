import React, { useState } from "react";
import * as styles from "./SignUp.module.scss";

const SignUp = () => {
  const [inputValue, setInputValue] = useState(``);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [hasApiError, setHasApiError] = useState(false);

  const handleChange = (e) => {
    if (hasSubmitted) return;
    setInputValue(e.target.value);
    setHasApiError(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (hasSubmitted || isSubmitting) return;

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
  };

  return (
    <div
      className={[
        styles.container,
        isSubmitting ? styles.submitting : null,
        hasSubmitted ? styles.submitted : null,
        hasApiError ? styles.apiError : null
      ].join(` `)}
    >
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          value={inputValue}
          onChange={handleChange}
          type="email"
          maxLength={100}
          className={[`b1`, styles.input].join(` `)}
          placeholder="Your Email"
          required
        />
        <button
          type="submit"
          className={[`button-text`, styles.signUpButton].join(` `)}
        >
          <span className={styles.buttonText}>Sign up</span>
          <div className={styles.spinnerContainer}>
            <div className={styles.spinner} />
          </div>
        </button>
      </form>
      <p
        aria-hidden={!hasSubmitted}
        className={[`b1`, styles.successMessage].join(` `)}
      >
        Thanks for signing up! Your invite is on it&apos;s way.
      </p>
      <p
        aria-hidden={!hasApiError}
        className={[`b1`, styles.errorMessage].join(` `)}
      >
        We&apos;re sorry, something went wrong! Please try again later.
      </p>
    </div>
  );
};

export default SignUp;
