/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/prefer-default-export */

import { graphql } from "gatsby";

export const Queries = graphql`
  fragment ShopCarouselSliceFragment on SanityShopCarouselSlice {
    _key
    _type

    backgroundColour {
      title
      hex
    }

    fontColour {
      title
      hex
    }
  }
`;
