import React from "react";
import { PortableText } from "@portabletext/react";
import { GatsbyImage } from "gatsby-plugin-image";
import { WidthContainer } from "~components";
import * as styles from "./TextImage5050.module.scss";

const TextImage5050 = ({ data: { image, text, imageOnRight } }) => (
  <WidthContainer paddingOnly>
    <div
      className={[
        styles.container,
        imageOnRight ? styles.imageOnRight : null
      ].join(` `)}
    >
      <div className={styles.imageContainer}>
        <div className={styles.image}>
          <GatsbyImage
            image={image?.asset?.gatsbyImageData}
            alt={image?.altText}
            className={styles.gatsbyImage}
          />
        </div>
      </div>
      <div className={[styles.text, `b1`].join(` `)}>
        <PortableText value={text} />
      </div>
    </div>
  </WidthContainer>
);

export default TextImage5050;
