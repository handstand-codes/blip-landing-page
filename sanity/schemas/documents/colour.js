import React from "react";

export default {
  name: `colour`,
  title: `Colour`,
  type: `document`,
  icon: () => <span style={{ fontSize: 30 }}>🎨</span>,
  fields: [
    {
      name: `title`,
      title: `Title`,
      type: `string`
    },
    {
      name: `hex`,
      title: `Hex`,
      type: `string`
    }
  ],
  preview: {
    select: {
      title: `title`,
      hex: `hex`
    },
    prepare({ title, hex }) {
      return {
        title,
        subtitle: hex,
        media: (
          <div
            style={{
              width: `1.5rem`,
              height: `1.5rem`,
              background: hex,
              borderRadius: `0.5rem`,
              border: `2px solid #1e1e1e`
            }}
          />
        )
      };
    }
  }
};
