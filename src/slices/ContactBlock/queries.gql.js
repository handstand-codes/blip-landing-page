/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/prefer-default-export */

import { graphql } from "gatsby";

export const Queries = graphql`
  fragment ContactBlockSliceFragment on SanityContactBlockSlice {
    _key
    _type
    subheader
    header
    bgImage {
      asset {
        gatsbyImageData
      }
    }
    form {
      name {
        warningMessage
        placeholder
        label
        hint
      }
      message {
        warningMessage
        placeholder
        label
        hint
      }
      enquiry {
        warningMessage
        placeholder
        label
        hint
      }
      email {
        warningMessage
        placeholder
        label
        hint
      }
    }
  }
`;
