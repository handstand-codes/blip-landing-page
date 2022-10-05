/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/prefer-default-export */

import { graphql } from "gatsby";

export const Queries = graphql`
  fragment ArticleTextSliceFragment on SanityArticleTextSlice {
    _key
    _type

    backgroundColor {
      title
      hex
    }

    fontColor {
      title
      hex
    }

    _rawBody
  }
`;
