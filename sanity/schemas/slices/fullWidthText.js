export default {
  title: `Full Width Text`,
  name: `fullWidthTextSlice`,
  type: `object`,
  fields: [
    {
      title: `Text Content`,
      name: `textContent`,
      type: `array`,
      of: [{ type: `block` }]
    },
    {
      title: `Text Colour`,
      name: `textColor`,
      type: `reference`,
      to: [{ type: `colour` }]
    },
    {
      title: `Background Colour`,
      name: `backgroundColor`,
      type: `reference`,
      to: [{ type: `colour` }]
    }
  ],
  preview: {
    prepare() {
      return {
        title: `Text Content`
      };
    }
  }
};
