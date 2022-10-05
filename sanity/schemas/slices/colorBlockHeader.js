export default {
  name: `colorBlockHeaderSlice`,
  title: `Color Block Header`,
  type: `object`,
  fields: [
    {
      name: `title`,
      title: `Title`,
      type: `string`
    },
    {
      name: `textColor`,
      title: `Text Colour`,
      type: `reference`,
      to: [{ type: `colour` }]
    },
    {
      name: `backgroundColor`,
      title: `Background Colour`,
      type: `reference`,
      to: [{ type: `colour` }]
    }
  ],
  preview: {
    prepare() {
      return {
        title: `Color Block Header`
      };
    }
  }
};
