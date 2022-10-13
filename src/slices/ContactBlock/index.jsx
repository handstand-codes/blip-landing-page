import React, { useState } from "react";
import { WidthContainer, TextInput, Button } from "~components";
import regex from "~constants/regex";
import { GatsbyImage } from "gatsby-plugin-image";
import * as styles from "./ContactBlock.module.scss";

const ContactBlock = ({
  data: { renderIndex, header, subheader, bgImage, form }
}) => {
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const [formValue, setFormValue] = useState({
    name: ``,
    email: ``,
    enquiry: ``,
    message: ``
  });

  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
    enquiry: false,
    message: false
  });

  const handleUpdateValue = (value, formField) => {
    setFormValue((prev) => ({ ...prev, [formField]: value }));
    setFormErrors((prev) => ({ ...prev, [formField]: false }));
  };

  const formHasError = () => {
    const error = {
      name: false,
      email: false,
      enquiry: false,
      message: false
    };

    const formFields = Object.keys(formValue);

    let hasError = false;

    formFields.forEach((field) => {
      if (!regex[field].test(formValue[field])) {
        error[field] = true;
        hasError = true;
      }
    });

    setFormErrors({
      name: error.name,
      email: error.email,
      enquiry: error.enquiry,
      message: error.message
    });

    return hasError;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formHasError()) return;
    /**
     * Do something with formValue
     * Probably an async submission,
     * on success set hasSubmitted to true
     */
    setHasSubmitted(true);
  };

  const Header = renderIndex === 0 ? `h1` : `h2`;

  return (
    <div className={styles.container}>
      <GatsbyImage
        image={bgImage?.asset?.gatsbyImageData}
        alt={bgImage?.altText || ``}
        className={styles.bgImage}
      />
      <WidthContainer paddingOnly>
        <div className={styles.flexWrapper}>
          <div className={styles.text}>
            <Header className={[styles.header, `d2`].join(` `)}>
              {header}
            </Header>
            <p className="b1">{subheader}</p>
          </div>
          <div className={styles.formContainer}>
            <div
              aria-hidden={!hasSubmitted}
              className={[
                styles.successContainer,
                hasSubmitted ? styles.visible : null
              ].join(` `)}
            >
              <h3 className="h2">Thanks for your enquiry.</h3>
              <p className="b2">
                We&apos;ll get back to you as soon as we can.
              </p>
              <Button color="black" to="/">
                Back to home
              </Button>
            </div>
            <form aria-hidden={hasSubmitted} onSubmit={handleSubmit}>
              <div className={styles.nameAndEmailFields}>
                {/* Name */}
                <TextInput
                  className={styles.inputField}
                  required
                  label={form.name.label}
                  placeholder={form.name.placeholder}
                  onChange={(value) => handleUpdateValue(value, `name`)}
                  value={formValue.name}
                  hasError={formErrors.name}
                />
                {/* Email */}
                <TextInput
                  className={styles.inputField}
                  required
                  label={form.email.label}
                  placeholder={form.email.placeholder}
                  onChange={(value) => handleUpdateValue(value, `email`)}
                  value={formValue.email}
                  hasError={formErrors.email}
                />
              </div>
              {/* Enquiry */}
              <TextInput
                className={styles.inputField}
                label={form.enquiry.label}
                placeholder={form.enquiry.placeholder}
                onChange={(value) => handleUpdateValue(value, `enquiry`)}
                value={formValue.enquiry}
                hasError={formErrors.enquiry}
                required
              />
              {/* Message */}
              <TextInput
                className={styles.inputField}
                required
                label={form.message.label}
                placeholder={form.message.placeholder}
                onChange={(value) => handleUpdateValue(value, `message`)}
                value={formValue.message}
                hasError={formErrors.message}
                textarea
              />
              <Button color="black" buttonType="submit">
                Submit
              </Button>
            </form>
          </div>
        </div>
      </WidthContainer>
    </div>
  );
};

export default ContactBlock;
