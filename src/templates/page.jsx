import React from "react";
import { graphql } from "gatsby";
import { Layout, SanitySlice } from "~components";

/** ============================================================================
 * @css
 */

// ...

/** ============================================================================
 * @page
 * Static page routes @ /*.
 */
const Page = ({ location, data: staticData }) => {
  // ---------------------------------------------------------------------------
  // context / ref / state

  const { sanityPage, sanitySettings } = staticData;
  const { pagebuilder } = sanityPage;

  const slices = pagebuilder?.slices || [];

  // ---------------------------------------------------------------------------
  // render

  return (
    <Layout location={location} globalSettings={sanitySettings}>
      {slices?.[0] &&
        slices.map((slice) => <SanitySlice key={slice._key} data={slice} />)}
    </Layout>
  );
};

export default Page;

export const query = graphql`
  query Page($id: String!) {
    sanityPage(id: { eq: $id }) {
      title
      slug {
        current
      }

      pagebuilder {
        slices {
          ...FullWidthTextSliceFragment
          ...ColorBlockHeaderSliceFragment
          ...DropdownGroupSliceFragment
          ...ArticleTextSliceFragment
          ...ShopCarouselSliceFragment
        }
      }
    }
    sanitySettings {
      footer {
        scrollingPhrases
      }
      menu {
        links {
          ... on SanityLinkInternal {
            _key
            _type
            reference {
              slug {
                current
              }
            }
            title
          }
          ... on SanityLinkExternal {
            _key
            _type
            newWindow
            title
            url
          }
        }
      }
    }
  }
`;
