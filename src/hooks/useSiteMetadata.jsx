import { graphql, useStaticQuery } from "gatsby";

export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          pathPrefix
          title
          description
          siteName
          banner
          ogLanguage
          socialLinks
          icon
          shortName
          author
          themeColor
          backgroundColor
          twitterUsername
        }
      }
    }
  `);

  return data.site.siteMetadata;
};

export default useSiteMetadata;
