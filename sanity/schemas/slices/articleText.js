export default {
  name: `articleTextSlice`,
  title: `Article Text`,
  type: `object`,
  fields: [
    {
      name: `backgroundColor`,
      title: `Background Colour`,
      type: `reference`,
      to: [{ type: `colour` }]
    },
    {
      name: `fontColor`,
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
