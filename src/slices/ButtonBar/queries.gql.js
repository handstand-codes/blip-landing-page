/* eslint-disable import/prefer-default-export */
import { graphql } from "gatsby";

export const Queries = graphql`
  fragment ButtonBarPageFragment on SanityButtonBar {
    _key
    _type
    previousText
    previousTitle
    previousTarget
    forwardsText
    forwardsTitle
    forwardsTarget
  }
`;
