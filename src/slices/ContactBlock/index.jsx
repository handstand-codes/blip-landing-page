import React, { useState } from "react";
import { WidthContainer, TextInput, Button } from "~components";
import { GatsbyImage } from "gatsby-plugin-image";
import * as styles from "./ContactBlock.module.scss";

const ContactBlock = ({
  data: { renderIndex, header, subheader, bgImage, form }
}) => {
  const [formValue, setFormValue] = useState({
    name: ``,
    email: ``,
    enquiry: ``,
    message: ``
  });

  const Header = renderIndex === 0 ? `h1` : `h2`;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValue);
  };

  const handleUpdateValue = (value, formField) => {
    setFormValue((prev) => ({ ...prev, [formField]: value }));
  };

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
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.nameAndEmailFields}>
              {/* Name */}
              <TextInput
                className={styles.inputField}
                required
                label={form.name.label}
                placeholder={form.name.placeholder}
                onChange={(value) => handleUpdateValue(value, `name`)}
                value={formValue.name}
              />
              {/* Email */}
              <TextInput
                className={styles.inputField}
                required
                label={form.email.label}
                placeholder={form.email.placeholder}
                onChange={(value) => handleUpdateValue(value, `email`)}
                value={formValue.email}
              />
            </div>
            {/* Enquiry */}
            <TextInput
              className={styles.inputField}
              label={form.enquiry.label}
              placeholder={form.enquiry.placeholder}
              onChange={(value) => handleUpdateValue(value, `enquiry`)}
              value={formValue.enquiry}
            />
            {/* Message */}
            <TextInput
              className={styles.inputField}
              required
              label={form.message.label}
              placeholder={form.message.placeholder}
              onChange={(value) => handleUpdateValue(value, `message`)}
              value={formValue.message}
              textarea
            />
            <Button color="black" buttonType="submit">
              Submit
            </Button>
          </form>
        </div>
      </WidthContainer>
    </div>
  );
};

export default ContactBlock;
