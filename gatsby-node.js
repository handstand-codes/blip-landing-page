/* eslint-disable no-console */
require(`dotenv`).config({
  path: `.env.${process.env.NODE_ENV}`
});

const path = require(`path`);

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "~assets": path.resolve(__dirname, `src/assets`),
        "~styles": path.resolve(__dirname, `src/styles`),
        "~data": path.resolve(__dirname, `src/data`),
        "~components": path.resolve(__dirname, `src/components`),
        "~config": path.resolve(__dirname, `/config`),
        "~context": path.resolve(__dirname, `src/context`),
        "~constants": path.resolve(__dirname, `src/constants`),
        "~hooks": path.resolve(__dirname, `src/hooks`),
        "~node_modules": path.resolve(__dirname, `node_modules`),
        "~sass": path.resolve(__dirname, `src/sass`),
        "~slices": path.resolve(__dirname, `src/slices`),
        "~templates": path.resolve(__dirname, `src/templates`),
        "~utils": path.resolve(__dirname, `src/utils`)
      }
    }
  });
};

/** ----------------------------------------------------------------------------
 * Create pages
 *
 */

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const { data, errors } = await graphql(`
    query SanityPageQuery {
      allSanityPage(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            id
            slug {
              current
            }
          }
        }
      }
    }
  `);

  // Handle errors
  if (errors) {
    reporter.panicOnBuild(
      `Error while running createPages Sanity GraphQL query.`
    );
    return;
  }

  // Create pages for each Sanity page
  const pageTemplate = path.resolve(`${__dirname}/src/templates/page.jsx`);

  data?.allSanityPage?.edges?.forEach(({ node: page }) => {
    createPage({
      path: page.slug.current,
      component: pageTemplate,
      context: {
        id: page.id
      }
    });
  });
};
