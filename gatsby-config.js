/* eslint-disable no-console */

require(`dotenv`).config({
  path: `.env.${process.env.NODE_ENV}`
});

const path = require(`path`);
const website = require(`./config/website`);

/** ----------------------------------------------------------------------------
 * Environment variables
 */
const {
  IS_STAGING,
  GATSBY_SITE_URL,
  HOST,
  gatsby_executing_command: GATSBY_CMD
} = process.env;

const pathPrefix = website.pathPrefix === `/` ? `` : website.pathPrefix;
const isDev =
  GATSBY_CMD === `develop` || process.env.NODE_ENV === `development`;
const isPreview = (IS_STAGING || `false`).toLocaleLowerCase() === `true`;

/** ----------------------------------------------------------------------------
 * Check for default website config values
 */
if (website.siteName === `Website Name`) {
  console.log(
    `\x1b[41m%s\x1b[0m`,
    `Found default values in /config/website.js, update before launch`
  );
}

/** ----------------------------------------------------------------------------
 * Robots.txt warning on build (do not block content on production)
 */
if (isDev || isPreview) {
  console.log(
    `\x1b[41m%s\x1b[0m`,
    `blocking search engines, change IS_STAGING env variable to prevent this`
  );
}
if (!isDev && !isPreview) {
  console.log(
    `\x1b[42m%s\x1b[0m`,
    `visible to search engines, change IS_STAGING env variable to prevent this`
  );
}

/** ----------------------------------------------------------------------------
 * Check all required ENV variables are set
 */
if (GATSBY_CMD !== `serve`) {
  const requiredEnvVariables = [`GATSBY_SITE_URL`];

  requiredEnvVariables.map((item) => {
    if (!process.env[item]) {
      throw Error(`Set ${item} env variable. See README`);
    }
    return null;
  });
}

/** ----------------------------------------------------------------------------
 * SEO plugins
 */
const seoPlugins = () => {
  const plugins = [`gatsby-plugin-sass`];

  plugins.push({
    resolve: `gatsby-plugin-robots-txt`,
    options: {
      configFile: isPreview
        ? path.join(__dirname, `config/robots-txt.staging.js`)
        : path.join(__dirname, `config/robots-txt.production.js`)
    }
  });
  // Todo: get manifest plugin icons working
  // plugins.push({
  //   resolve: `gatsby-plugin-manifest`,
  //   options: {
  //     name: website.title,
  //     short_name: website.shortName,
  //     description: website.description,
  //     start_url: `/`,
  //     background_color: website.backgroundColor,
  //     theme_color: website.themeColor,
  //     display: `standalone`,
  //     icon: website.icon,
  //     include_favicon: false,
  //     icon_options: {
  //       purpose: `any maskable`
  //     }
  //   }
  // });
  // gatsby-plugin-offline to be after gatsby-plugin-manifest
  plugins.push({
    resolve: `gatsby-plugin-offline`
  });
  plugins.push(`gatsby-plugin-brotli`);

  if (process.env.WEBPACK_ANALYZER) {
    plugins.push({
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: HOST === `gatsby-cloud` ? `static` : `server`
      }
    });
  }

  return plugins;
};

/** ----------------------------------------------------------------------------
 * Tracking plugins
 */
const trackingPlugins = () => {
  const plugins = [];

  if (process.env.GA_ID) {
    plugins.push({
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GA_ID,
        head: true,
        anonymize: true
      }
    });
  }

  if (process.env.GTM_ID) {
    plugins.push({
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: process.env.GTM_ID,
        includeInDevelopment: true,
        defaultDataLayer: () => {
          const queryStrings =
            (document && document.location && document.location.search) || {};

          window.utms = queryStrings;

          const queriesObj = queryStrings
            ? Object.fromEntries(new URLSearchParams(queryStrings))
            : {};

          return {
            platform: `gatsby`,
            ...queriesObj
          };
        }
      }
    });
  }

  if (process.env.SEGMENT_WRITE_KEY) {
    plugins.push({
      resolve: `gatsby-plugin-segment-js`,
      options: {
        prodKey: process.env.SEGMENT_WRITE_KEY,
        devKey: process.env.SEGMENT_WRITE_KEY,
        trackPage: false
      }
    });
  }

  if (process.env.HUBSPOT_ID) {
    plugins.push({
      resolve: `gatsby-plugin-hubspot`,
      options: {
        trackingCode: process.env.HUBSPOT_ID,
        respectDNT: false,
        productionOnly: true
      }
    });
  }

  if (process.env.HOTJAR_ID && process.env.HOTJAR_VERSION) {
    plugins.push({
      resolve: `gatsby-plugin-hotjar`,
      options: {
        id: process.env.HOTJAR_ID,
        sv: process.env.HOTJAR_VERSION
      }
    });
  }

  return plugins;
};

/** ----------------------------------------------------------------------------
 * Hosting plugins
 */
const hostingPlugins = () => {
  const plugins = [];

  const securityHeaders = {
    "/*": [
      `X-Frame-Options: DENY`,
      `X-XSS-Protection: 1; mode=block`,
      `X-Content-Type-Options: nosniff`
    ]
  };

  switch (HOST) {
    case `gatsby-cloud`:
      plugins.push({
        resolve: `gatsby-plugin-gatsby-cloud`,
        options: {
          headers: securityHeaders,
          allPageHeaders: [],
          mergeSecurityHeaders: true,
          mergeLinkHeaders: true,
          mergeCachingHeaders: true
        }
      });

      break;

    case `netlify`:
      plugins.push({
        resolve: `gatsby-plugin-netlify`,
        options: {
          headers: securityHeaders,
          allPageHeaders: [],
          mergeSecurityHeaders: true,
          mergeLinkHeaders: true,
          mergeCachingHeaders: true
        }
      });

      break;

    default:
      break;
  }

  return plugins;
};

/** ============================================================================
 * Export
 */
module.exports = {
  //
  // General Information
  pathPrefix: website.pathPrefix,
  siteMetadata: {
    siteUrl: GATSBY_SITE_URL + pathPrefix,
    pathPrefix,
    title: website.title,
    description: website.description,
    banner: website.banner,
    siteName: website.siteName,
    siteLanguage: website.siteLanguage,
    ogLanguage: website.ogLanguage,
    author: website.author,
    twitterUsername: website.twitterUsername,
    socialLinks: website.socialLinks,
    backgroundColor: website.backgroundColor,
    themeColor: website.themeColor,
    shortName: website.shortName,
    icon: website.icon
  },
  //
  // Flags
  flags: {
    DEV_SSR: false,
    PRESERVE_FILE_DOWNLOAD_CACHE: false
  },
  trailingSlash: `always`,
  //
  // Plugins
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-source-filesystem`,
      options: { name: `src`, path: path.join(__dirname, `src`) }
    },
    `gatsby-plugin-svgr`,
    `gatsby-plugin-layout`,
    ...hostingPlugins(),
    ...seoPlugins(),
    ...trackingPlugins()
  ]
};
