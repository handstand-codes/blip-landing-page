const generatePath = require(`./generatePath`);

module.exports = (doc) => {
  const { uid } = doc;
  // Example of link resolver for other post type
  // --------------------------------------------
  // if (doc.type === 'blog_post') {
  //   return `/blog/${uid}/`;
  // }
  return generatePath(uid);
};
