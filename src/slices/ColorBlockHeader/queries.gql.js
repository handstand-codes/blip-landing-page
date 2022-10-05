/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/prefer-default-export */

import { graphql } from "gatsby";

export const Queries = graphql`
  fragment ColorBlockHeaderSliceFragment on SanityColorBlockHeaderSlice {
    _key
    _type
    title
    textColor {
      hex
    }
    backgroundColor {
      hex
    }
  }
`;
