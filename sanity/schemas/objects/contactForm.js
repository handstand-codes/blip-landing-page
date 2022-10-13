export default {
  name: `contactForm`,
  title: `Contact Form`,
  type: `object`,
  fields: [
    {
      name: `name`,
      title: `Name`,
      type: `textInput`
    },
    {
      name: `email`,
      title: `Email`,
      type: `textInput`
    },
    {
      name: `enquiry`,
      title: `Enquiry`,
      type: `textInput`
    },
    {
      name: `message`,
      title: `Message`,
      type: `textInput`
    }
  ],
  preview: {
    prepare() {
      return {
        title: `Contact Form`
      };
    }
  }
};
