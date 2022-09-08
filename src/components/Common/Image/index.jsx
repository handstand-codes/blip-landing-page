/* eslint-disable react/prop-types */

import React from "react";
import { css } from "@emotion/react";
import {
  GatsbyImage,
  getImage,
  getSrc,
  withArtDirection
} from "gatsby-plugin-image";

const Image = ({ className, image, alt, loading, title, contain }) => {
  const altText = alt || image?.altText || ``;

  if (typeof image === `string`) {
    return <img className={className} src={image} alt={altText} />;
  }

  const imageObj = getImage(image?.asset) || image;
  const src = getSrc(imageObj) || image?.asset?.url;
  const mobileImageObj = image?.mobileImage?.asset;

  if (!imageObj && !src) {
    return <></>;
  }

  let images = ``;

  // without useArtDirection, do we change srcSet properly at different breakpoints?
  // i.e. does the Sanity impl work by default, and are we interrupting it?
  //
  // before, we were using two GatsbyImage components, one for each desktop/mobile,
  // which kept Gatsby image/Sanity working by default with one another
  //
  // useArtDirection is an attempt to merge everything, which might be borking it

  if (mobileImageObj) {
    images = withArtDirection(getImage(mobileImageObj), [
      {
        media: `(min-width: 1025px)`,
        image: imageObj
      }
    ]);
  } else {
    images = imageObj;
  }

  //
  return (
    <>
      {(src?.includes(`.svg`) && (
        <img
          css={css`
            object-fit: ${contain ? `contain` : `cover`};
          `}
          className={`${className} svg-image`}
          src={src}
          alt={altText}
          title={title || altText || ``}
        />
      )) || (
        <GatsbyImage
          className={className}
          loading={loading || `eager`}
          image={images}
          alt={altText}
          title={title || altText || ``}
          objectFit={contain ? `contain` : `cover`}
        />
      )}
    </>
  );
};

export default Image;
