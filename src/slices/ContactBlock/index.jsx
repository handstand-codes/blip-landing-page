import React from "react";
import { WidthContainer, TextInput } from "~components";
import * as styles from "./ContactBlock.module.scss";

const ContactBlock = ({
  renderIndex,
  header,
  subheader,
  bgImage,
  contactForm
}) => {
  const Header = renderIndex === 0 ? `h1` : `h2`;

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.container}>
      <WidthContainer paddingOnly>
        <div className={styles.flexWrapper}>
          <div className={styles.text}>
            <Header className={[styles.header, `d2`].join(` `)}>
              {header}
            </Header>
            <p className="b1">{subheader}</p>
          </div>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.nameAndEmailFields}>
              {/* Name */}
              <TextInput
                className={styles.inputField}
                required
                label="Name"
                placeholder="Type name here"
              />
              {/* Email */}
              <TextInput
                className={styles.inputField}
                required
                label="Email address"
                placeholder="Type address here"
              />
            </div>
            {/* Enquiry */}
            <TextInput
              className={styles.inputField}
              label="Enquiry topic"
              placeholder="Type enquiry here"
            />
            {/* Message */}
            <TextInput
              className={styles.inputField}
              required
              label="Message"
              placeholder="Type message here"
            />
          </form>
        </div>
      </WidthContainer>
    </div>
  );
};

export default ContactBlock;
