import React from "react";
import { graphql } from "gatsby";
import { Layout, SanitySlice } from "~components";

const Page = ({ location, data: staticData }) => {
  const { sanityPage, sanitySettings } = staticData;
  const { menu } = sanitySettings;
  const { slices: pageSlices, seo: pageSeo } = sanityPage;
  const {
    title = ``,
    description = ``,
    keywords = ``,
    image = {}
  } = pageSeo || {};
  const seo = { title, description, keywords, image };

  return (
    <Layout location={location} seo={seo} menu={menu}>
      {pageSlices.map((section) => (
        <SanitySlice data={section} key={section._key} />
      ))}
    </Layout>
  );
};

export default Page;

export const query = graphql`
  query Page($id: String!) {
    sanitySettings {
      menu {
        links {
          ... on SanityLinkGroup {
            _key
            _type
            links {
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
            title
          }
        }
      }
    }
    sanityPage(id: { eq: $id }) {
      seo {
        title
        keywords
        description
        image {
          asset {
            url
          }
        }
      }
      slices {
        ...BannerPageFragment
        ...ButtonBarPageFragment
        ...ColourGridPageFragment
        ...FeaturedProductsPageFragment
        ...FontInspectorPageFragment
        ...FontListPageFragment
        ...ImageBannerPageFragment
        ...MediaPageFragment
        ...TwoColsTextPageFragment
      }
    }
  }
`;
