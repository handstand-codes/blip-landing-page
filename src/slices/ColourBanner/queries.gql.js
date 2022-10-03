/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/prefer-default-export */

import { graphql } from "gatsby";

export const Queries = graphql`
  fragment ColourBannerSliceFragment on SanityColourBannerSlice {
    _key
    _type
    backgroundColour {
      hex
    }
    fontColour {
      hex
    }
    title
  }
`;
