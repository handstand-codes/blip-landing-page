/* eslint-disable import/prefer-default-export */
import { graphql } from "gatsby";

export const Queries = graphql`
  fragment FontInspectorPageFragment on SanityFontInspector {
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
    fontList: fonts {
      key
      name
      fontVariants {
        letterSpacing
        lineHeight
        size
      }
    }
    title
  }
`;
