/* eslint-disable import/prefer-default-export */
import { graphql } from "gatsby";

export const Queries = graphql`
  fragment BannerPageFragment on SanityBanner {
    _key
    _type
    heading
    ctaText
    ctaTarget
    backgroundColor {
      hex
      title
    }
    fontColor {
      title
    }
  }
`;
