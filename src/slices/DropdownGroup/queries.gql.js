/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/prefer-default-export */

import { graphql } from "gatsby";

export const Queries = graphql`
  fragment DropdownGroupSliceFragment on SanityDropdownGroupSlice {
    _key
    _type
    title
    dropdownBlocks {
      contentText
      buttonText
    }
  }
`;
