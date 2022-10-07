export default {
  name: `textImage5050Slice`,
  title: `Text + Image 50/50`,
  type: `object`,
  fields: [
    {
      title: `Text`,
      name: `text`,
      type: `array`,
      of: [
        {
          type: `block`,
          styles: [{ title: `Normal`, value: `normal` }],
          lists: [],
          marks: {
            decorators: [],
            annotations: []
          }
        }
      ]
    },
    {
      name: `image`,
      title: `Image`,
      type: `altImage`
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
