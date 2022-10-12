/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/prefer-default-export */

import { graphql } from "gatsby";

export const Queries = graphql`
  fragment VideoResourcesSliceFragment on SanityVideoResourcesSlice {
    _key
    _type
    title
    resourceTiles {
      video {
        asset {
          url
        }
      }
      title
      description
      image {
        asset {
          gatsbyImageData
        }
      }
      link {
        url
        title
        newWindow
      }
    }
  }
`;
