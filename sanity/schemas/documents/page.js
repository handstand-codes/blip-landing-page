import React from "react";

export default {
  name: `page`,
  title: `Page`,
  type: `document`,
  icon: () => <span style={{ fontSize: 30 }}>📄</span>,
  fields: [
    {
      name: `title`,
      title: `Title`,
      type: `string`
    },
    {
      name: `slug`,
      title: `URL`,
      type: `slug`,
      options: {
        source: `title`
      }
    },
    {
      name: `pagebuilder`,
      title: `Pagebuilder`,
      type: `pagebuilder`
    },
    {
      name: `seo`,
      title: `SEO`,
      type: `seo.singleton`
    }
  ]
};
