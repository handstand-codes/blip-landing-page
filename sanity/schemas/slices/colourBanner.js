export default {
  name: `colourBannerSlice`,
  title: `Colour Banner`,
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
      name: `title`,
      title: `Title`,
      type: `string`
    }
  ],
  preview: {
    prepare() {
      return {
        title: `Colour Banner`
      };
    }
  }
};
