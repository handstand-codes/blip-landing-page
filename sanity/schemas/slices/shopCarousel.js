export default {
  name: `shopCarouselSlice`,
  title: `Shop Carousel`,
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
    }
  ],
  preview: {
    prepare() {
      return {
        title: `Shop Carousel`
      };
    }
  }
};
