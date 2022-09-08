const generatePath = (slug) => {
  if (!slug) return `/`;
  if (slug === `home`) return `/`;
  const formmatedSlug = slug.replace(/\./g, `/`);
  return `/${formmatedSlug}/`;
};

module.exports = generatePath;
