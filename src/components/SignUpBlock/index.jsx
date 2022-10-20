import React, { useState } from "react";
import { WidthContainer } from "~components";
import * as styles from "./SignUpBlock.module.scss";

const SignUpBlock = () => {
  const [inputValue, setInputValue] = useState(``);

  const handleChange = (e) => setInputValue(e.target.value);

  return (
    <div className={styles.container} id="sign-up-block">
      <WidthContainer>
        <div className={styles.contentContainer}>
          <p className={[styles.availableText, `caption`].join(` `)}>
            Available in winter 2022
          </p>
          <h1 className={[`h2`, styles.header].join(` `)}>
            Sign up to be amongst the first members of Blip Club.
          </h1>
          <p className={[`b1`, styles.description].join(` `)}>
            We’ll send you the lates information on new products, events and
            meet ups before anyone else.
          </p>
          <form className={styles.form}>
            <input
              value={inputValue}
              onChange={handleChange}
              type="text"
              className={styles.input}
              placeholder="Your journey stars here."
            />
            <button
              type="submit"
              className={[`button-text`, styles.signUpButton].join(` `)}
            >
              Sign up
            </button>
          </form>
        </div>
      </WidthContainer>
    </div>
  );
};

export default SignUpBlock;
