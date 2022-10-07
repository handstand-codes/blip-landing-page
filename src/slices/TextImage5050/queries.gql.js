/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/prefer-default-export */

import { graphql } from "gatsby";

export const Queries = graphql`
  fragment TextImage5050SliceFragment on SanityTextImage5050Slice {
    _key
    _type
    text {
      _type
      children {
        text
        marks
        _type
      }
    }
    image {
      altText
      asset {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
      }
    }
    imageOnRight
  }
`;
