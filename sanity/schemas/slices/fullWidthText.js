export default {
  title: `Full Width Text`,
  name: `fullWidthTextSlice`,
  type: `object`,
  fields: [
    {
      title: `Text Content`,
      name: `textContent`,
      type: `array`,
      of: [{ type: `block` }],
      validation: (Rule) => Rule.required()
    },
    {
      title: `Background Colour`,
      name: `backgroundColour`,
      type: `reference`,
      to: [{ type: `colour` }],
      validation: (Rule) => Rule.required()
    },
    {
      title: `Font Colour`,
      name: `fontColour`,
      type: `reference`,
      to: [{ type: `colour` }],
      validation: (Rule) => Rule.required()
    }
  ],
  preview: {
    prepare() {
      return {
        title: `textContent`
      };
    }
  }
};
