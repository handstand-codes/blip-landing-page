export default {
  title: `Video Resources`,
  name: `videoResourcesSlice`,
  type: `object`,
  fields: [
    {
      title: `Title`,
      name: `title`,
      type: `string`
    },
    {
      title: `Resource Tiles`,
      name: `resourceTiles`,
      type: `array`,
      of: [{ type: `videoResourceTile` }]
    }
  ],
  preview: {
    prepare() {
      return {
        title: `Video Resources`
      };
    }
  }
};
