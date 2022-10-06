export default {
  title: `Downdown Group`,
  name: `dropdownGroupSlice`,
  type: `object`,
  fields: [
    {
      title: `Title`,
      name: `title`,
      type: `string`
    },
    {
      title: `Dropdown Blocks`,
      name: `dropdownBlocks`,
      type: `array`,
      of: [{ type: `dropdown` }]
    }
  ],
  preview: {
    prepare() {
      return {
        title: `Dropdown Group`
      };
    }
  }
};
