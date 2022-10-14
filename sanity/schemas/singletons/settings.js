import React from "react";

export default {
  name: `settings`,
  title: `Settings`,
  type: `document`,
  icon: () => <span style={{ fontSize: 30 }}>⚙️</span>,
  fields: [
    {
      name: `menu`,
      title: `Menu`,
      type: `menu`
    },
    {
      name: `footer`,
      title: `Footer`,
      type: `footer`
    },
    {
      name: `seo`,
      title: `SEO`,
      type: `seo.standard`
    }
  ],
  preview: {
    prepare() {
      return {
        title: `Settings`
      };
    }
  }
};
