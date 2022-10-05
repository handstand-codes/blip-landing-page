export default {
  name: `shopCarouselSlice`,
  title: `Shop Carousel`,
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
