export default {
  name: `videoResourceTile`,
  title: `Video Resource Tile`,
  type: `object`,
  fields: [
    {
      name: `title`,
      title: `Title`,
      type: `string`
    },
    {
      name: `description`,
      title: `Description`,
      type: `text`
    },
    {
      name: `image`,
      title: `Image`,
      type: `altImage`
    },
    {
      name: `video`,
      title: `Video`,
      type: `file`,
      description: `Keep the filesize as small as possible to reduce load times`
    },
    {
      name: `link`,
      title: `Link`,
      type: `linkExternal`,
      initialValue: {
        title: `View tutorial`
      }
    }
  ]
};
