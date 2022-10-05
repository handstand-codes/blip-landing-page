/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/prefer-default-export */

import { graphql } from "gatsby";

export const Queries = graphql`
  fragment FullWidthTextSliceFragment on SanityFullWidthTextSlice {
    _key
    _type
    textContent {
      children {
        text
        marks
        _type
      }
      _type
    }
    textColour {
      hex
    }
    backgroundColour {
      hex
    }
  }
`;
