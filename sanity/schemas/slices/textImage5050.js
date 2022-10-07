export default {
  name: `textImage5050Slice`,
  title: `Text + Image 50/50`,
  type: `object`,
  fields: [
    {
      title: `Text`,
      name: `text`,
      type: `array`,
      of: [{ type: `block` }]
    },
    {
      name: `image`,
      title: `Image`,
      type: `image`,
      fields: [
        {
          name: `altText`,
          title: `Alternative Text`,
          type: `string`,
          options: {
            isHighlighted: true
          }
        }
      ]
    },
    {
      name: `imageOnRight`,
      title: `Image on right?`,
      type: `boolean`,
      initialValue: false
    }
  ],
  preview: {
    prepare() {
      return {
        title: `Text + Image 50/50`
      };
    }
  }
};
