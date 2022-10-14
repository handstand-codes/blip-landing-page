import React, { useLayoutEffect } from "react";
import { graphql } from "gatsby";
import { SanitySlice } from "~components";
import { useApp } from "~hooks";

const Page = ({ data: staticData }) => {
  const { sanityPage, sanitySettings } = staticData;
  const { pagebuilder } = sanityPage;

  const slices = pagebuilder?.slices || [];

  const { setGlobalSettings } = useApp();

  useLayoutEffect(() => {
    setGlobalSettings(sanitySettings);
  }, []);

  return (
    // Page content is wrapped in layout component by gatsby-plugin-layout
    <>
      {slices?.[0] &&
        slices.map((slice, i) => (
          <SanitySlice key={slice._key} data={{ ...slice, renderIndex: i }} />
        ))}
    </>
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
        newsletterSignup {
          label
          placeholder
          successMessage
        }
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
