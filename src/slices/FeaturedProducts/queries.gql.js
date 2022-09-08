/* eslint-disable import/prefer-default-export */
import { graphql } from "gatsby";

export const Queries = graphql`
  fragment FeaturedProductsPageFragment on SanityFeaturedProducts {
    _key
    _type
    fontColor {
      title
      hex
    }
    products {
      title
      subtitle
      price
      target
      image {
        asset {
          gatsbyImageData(width: 2000, placeholder: NONE, layout: CONSTRAINED)
        }
        altText
      }
    }
    heading
    ctaText
    ctaTarget
  }
`;
