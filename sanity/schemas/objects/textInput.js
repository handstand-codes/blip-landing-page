export default {
  name: `textInput`,
  title: `Text Input`,
  type: `object`,
  fields: [
    {
      name: `label`,
      title: `Label`,
      type: `string`
    },
    {
      name: `placeholder`,
      title: `Placeholder Text`,
      type: `string`
    },
    {
      name: `hint`,
      title: `Hint`,
      type: `string`
    },
    {
      name: `warningMessage`,
      title: `Warning Message`,
      type: `string`
    }
  ],
  preview: {
    select: {
      title: `Text Input`
    }
  }
};
