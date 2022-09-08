/* eslint-disable import/prefer-default-export */
import { graphql } from "gatsby";

export const Queries = graphql`
  fragment FontListPageFragment on SanityFontList {
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
    fonts
    title
  }
`;
