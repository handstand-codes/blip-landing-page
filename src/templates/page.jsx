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
        slices.map((slice, i) => (
          <SanitySlice key={slice._key} data={{ ...slice, renderIndex: i }} />
        ))}
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
          ...ContactBlockSliceFragment
          ...ColorBlockHeaderSliceFragment
          ...DropdownGroupSliceFragment
          ...ArticleTextSliceFragment
          ...ShopCarouselSliceFragment
          ...TextImage5050SliceFragment
          ...VideoResourcesSliceFragment
        }
      }
    }
    sanitySettings {
      footer {
        scrollingPhrases
        linksColumn1 {
          ... on SanityLinkExternal {
            _key
            _type
            url
            title
            newWindow
          }
          ... on SanityLinkInternal {
            _key
            _type
            title
            reference {
              slug {
                current
              }
            }
          }
        }
        linksColumn2 {
          ... on SanityLinkInternal {
            _key
            _type
            title
            reference {
              slug {
                current
              }
            }
          }
          ... on SanityLinkExternal {
            _key
            _type
            url
            title
            newWindow
          }
        }
        linksColumn3 {
          ... on SanityLinkInternal {
            _key
            _type
            title
            reference {
              slug {
                current
              }
            }
          }
          ... on SanityLinkExternal {
            _key
            _type
            url
            title
            newWindow
          }
        }
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
