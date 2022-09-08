/* eslint-disable import/prefer-default-export */
import { graphql } from "gatsby";

export const Queries = graphql`
  fragment ColourGridPageFragment on SanityColourGrid {
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
    colours {
      name
      gridSize
      hex
      rgb
      fontColor {
        title
        hex
      }
    }
    title
  }
`;
