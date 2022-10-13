export default {
  name: `contactBlockSlice`,
  title: `Contact Block`,
  type: `object`,
  fields: [
    {
      name: `header`,
      title: `Header`,
      type: `string`
    },
    {
      name: `subheader`,
      title: `Subheader`,
      type: `text`
    },
    {
      name: `form`,
      title: `Form`,
      type: `contactForm`
    },
    {
      name: `bgImage`,
      title: `Background Image`,
      type: `image`
    }
  ],
  initialValue: {
    header: `More questions?`,
    subheader: `Get in touch and we’ll get back to you as soon as we can.`,
    form: {
      name: {
        label: `Name`,
        placeholder: `Type name here...`
      },
      email: {
        label: `Email`,
        placeholder: `Type address here...`
      },
      enquiry: {
        label: `Enquiry`,
        placeholder: `Type enquiry here...`
      },
      message: {
        label: `Message`,
        placeholder: `Type message here...`
      }
    }
  },
  preview: {
    prepare() {
      return {
        title: `Contact Block`
      };
    }
  }
};
