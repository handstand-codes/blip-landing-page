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
      title: `Text Colour`,
      name: `textColour`,
      type: `reference`,
      to: [{ type: `colour` }],
      validation: (Rule) => Rule.required()
    },
    {
      title: `Background Colour`,
      name: `backgroundColour`,
      type: `reference`,
      to: [{ type: `colour` }],
      validation: (Rule) => Rule.required()
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
