export default {
  name: "footer",
  title: "Footer",
  type: "object",
  options: {
    collapsed: false,
    collapsible: true
  },
  fields: [
    {
      title: "Links Column 1",
      name: "linksColumn1",
      type: "array",
      of: [{ type: "linkInternal" }, { type: "linkExternal" }]
    },
    {
      title: "Links Column 2",
      name: "linksColumn2",
      type: "array",
      of: [{ type: "linkInternal" }, { type: "linkExternal" }]
    },
    {
      title: "Links Column 3",
      name: "linksColumn3",
      type: "array",
      of: [{ type: "linkInternal" }, { type: "linkExternal" }]
    },

    {
      name: "scrollingPhrases",
      title: "Scrolling Phrases",
      type: "array",
      of: [{ type: "string" }]
    },
    {
      name: "newsletterSignup",
      title: "Newsletter Signup",
      type: "newsletterSignup"
    }
  ]
};
