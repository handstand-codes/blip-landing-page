export default {
  locale: process.env.GATSBY_LOCALE,
  storeDomain: process.env.GATSBY_STORE_DOMAIN,
  storefrontToken: process.env.GATSBY_STOREFRONT_TOKEN,
  graphqlApiVersion: process.env.GATSBY_GRAPHQL_API_VERSION,
  sanity: {
    projectId: process.env.SANITY_PROJECT_ID,
    dataset: process.env.SANITY_DATASET,
    token: process.env.SANITY_TOKEN,
    apiVersion: process.env.SANITY_API_VERSION,
  },
};
