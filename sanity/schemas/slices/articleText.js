export default {
  name: `articleTextSlice`,
  title: `Article Text`,
  type: `object`,
  fields: [
    {
      name: `backgroundColour`,
      title: `Background Colour`,
      type: `reference`,
      to: [{ type: `colour` }]
    },
    {
      name: `fontColour`,
      title: `Font Colour`,
      type: `reference`,
      to: [{ type: `colour` }]
    },
    {
      name: `body`,
      title: `Body`,
      type: `blockContent`
    }
  ],
  preview: {
    prepare() {
      return {
        title: `Article Text`
      };
    }
  }
};
