/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/prefer-default-export */

import { graphql } from "gatsby";

export const Queries = graphql`
  fragment ColourBlockHeaderSliceFragment on SanityColourBlockHeaderSlice {
    _key
    _type
    title
    textColour {
      hex
    }
    backgroundColour {
      hex
    }
  }
`;
