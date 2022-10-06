export default {
  name: `pagebuilder`,
  title: `Pagebuilder`,
  type: `object`,
  fields: [
    {
      name: `slices`,
      title: `Slices`,
      type: `array`,
      of: [
        { type: `fullWidthTextSlice` },
        { type: `colorBlockHeaderSlice` },
        { type: `dropdownGroupSlice` },
        { type: `articleTextSlice` },
        { type: `shopCarouselSlice` }
      ]
    }
  ]
};
