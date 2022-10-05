export default {
  name: `colourBlockHeaderSlice`,
  title: `Colour Block Header`,
  type: `object`,
  fields: [
    {
      name: `title`,
      title: `Title`,
      type: `string`
    },
    {
      name: `fontColour`,
      title: `Font Colour`,
      type: `reference`,
      to: [{ type: `colour` }]
    },
    {
      name: `backgroundColour`,
      title: `Background Colour`,
      type: `reference`,
      to: [{ type: `colour` }]
    }
  ],
  preview: {
    prepare() {
      return {
        title: `Colour Block Header`
      };
    }
  }
};
