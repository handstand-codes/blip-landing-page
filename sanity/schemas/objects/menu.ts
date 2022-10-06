import { CogIcon, FolderIcon } from "@sanity/icons";

export default {
  name: "menu",
  title: "Menu",
  type: "object",
  options: {
    collapsed: false,
    collapsible: true
  },
  fields: [
    // Links
    {
      name: "links",
      title: "Links",
      type: "array",
      of: [{ type: "linkInternal" }, { type: "linkExternal" }]
    }
  ]
};
