import React from "react";
import { useSiteMetadata } from "~hooks";
import Facebook from "./Facebook";
import Twitter from "./Twitter";

// Complete tutorial: https://www.gatsbyjs.org/docs/add-seo-component/

const SEO = () => {
  const seo = useSiteMetadata();

  return (
    <>
      <title>{seo.title}</title>
      <link rel="icon" type="image/png" href="/favicon.png" />
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
    </>
  );
};

export default SEO;
