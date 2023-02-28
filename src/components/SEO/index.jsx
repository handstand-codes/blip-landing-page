import React, { useEffect } from "react";
import { useSiteMetadata, useDarkMode } from "~hooks";
import Facebook from "./Facebook";
import Twitter from "./Twitter";

// Complete tutorial: https://www.gatsbyjs.org/docs/add-seo-component/

const SEO = () => {
  const seo = useSiteMetadata();
  const isDarkMode = useDarkMode();

  useEffect(() => {
    const favicon = document.querySelectorAll(`[rel="icon"]`)[0];
    if (!favicon) return;
    if (isDarkMode) {
      favicon.href = `/favicon-dark.png`;
    } else {
      favicon.href = `/favicon-light.png`;
    }
  }, [isDarkMode]);

  return (
    <>
      <title>{seo.title}</title>
      <link rel="icon" type="image/png" href="/favicon-light.png" />
      {seo.description && <meta name="description" content={seo.description} />}
      {seo.keywords && <meta name="keywords" content={seo.keywords} />}
      <Facebook
        name={seo.title}
        desc={seo.description}
        image={seo.banner}
        title={seo.title}
        type="website"
        url={seo.url}
        locale="en_US"
      />
      <Twitter
        title={seo.title}
        image={seo.image}
        desc={seo.description}
        username={seo.twitterUsername}
      />
      {/* Tracking */}
      <meta
        name="facebook-domain-verification"
        content="57ino4t2jhfsu6jutr278ganty27yq"
      />
    </>
  );
};

export default SEO;
