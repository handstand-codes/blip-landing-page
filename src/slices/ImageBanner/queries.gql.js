/* eslint-disable import/prefer-default-export */
import { graphql } from "gatsby";

export const Queries = graphql`
  fragment ImageBannerPageFragment on SanityImageBanner {
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
    image {
      asset {
        gatsbyImageData(width: 2000, placeholder: NONE, layout: CONSTRAINED)
      }
      altText
    }
    heading
    preheading
  }
`;
