/* eslint-disable import/prefer-default-export */
import { graphql } from "gatsby";

export const Queries = graphql`
  fragment TwoColsTextPageFragment on SanityTwoColsText {
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
    caption
    subtitle
    title
    content {
      ... on SanityDownload {
        _key
        _type
        links {
          buttonText
          target
          text
        }
      }
      ... on SanityNewsletter {
        _key
        _type
        heading
      }
      ... on SanityTextContent {
        _key
        _type
        content
        contentStyle
      }
    }
  }
`;
