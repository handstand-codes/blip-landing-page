export default {
  title: `Block Content`,
  name: `blockContent`,
  type: `array`,
  of: [
    {
      title: `Block`,
      type: `block`,
      styles: [{ title: `Normal`, value: `normal` }],
      lists: [
        { title: `Bullet`, value: `bullet` },
        { title: `Numbered`, value: `number` }
      ],
      marks: {
        decorators: [
          { title: `Strong`, value: `strong` },
          { title: `Emphasis`, value: `em` }
        ],
        annotations: [
          {
            title: `URL`,
            name: `link`,
            type: `object`,
            fields: [
              {
                title: `URL`,
                name: `href`,
                type: `url`,
                validation: (Rule) =>
                  Rule.uri({
                    scheme: [`http`, `https`, `mailto`, `tel`]
                  })
              }
            ]
          }
        ]
      }
    },
    {
      type: `altImage`
    }
  ]
};
