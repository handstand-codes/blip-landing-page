export default {
  name: `colorGridItem`,
  title: `Color Grid Item`,
  type: `object`,
  fields: [
    {
      name: `fontColor`,
      title: `Font Colour`,
      type: `reference`,
      to: [{ type: `colour` }]
    },
    {
      name: `name`,
      title: `Name`,
      type: `string`
    },
    {
      name: `gridSize`,
      title: `Grid Size`,
      type: `string`,
      options: {
        list: [`s`, `m`, `l`, `xl`]
      }
    },
    {
      name: `hex`,
      title: `Hex`,
      type: `string`
    },
    {
      name: `rgb`,
      title: `RGB`,
      type: `string`
    }
  ]
};
