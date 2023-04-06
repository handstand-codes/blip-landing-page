# Blip Landing Page

Simple landing page with newsletter signup.

## Features

- Gatsby V4
- gatsby-plugin-image
- SASS with CSS modules
- SEO
  - OpenGraph Tags
  - Twitter Tags
  - Forced trailing slashes
  - Favicons (light and dark mode)
  - Optional GA, GTM, Segment, Hubspot and HotJar setup
  - Robots.txt generator
  - Redirects generator for Netlify, Vercel, AWS and Gatsby Cloud
- PWA
  - Offline Support
- Brotli Compression

## Installation + Repo Setup

1. Clone and `yarn install`
2. Configure `.env.development`
3. `yarn dev` to run locally

## Configuration

#### HOST

The `HOST` environment variable generates relevant redirect files for your chosen hosting provider, following options are accepted:

- `netlify` - generates a `_redirects` file in the static directory based on contents in `/config/redirects.js` & `/config/rewrites.js`. Adds the `gatsby-plugin-netlify` and `gatsby-plugin-netlify-cache` plugins to the `gatsby-config.js` file.
- `vercel` - generates a `vercel.json` file in the static directory based on contents in `/config/redirects.js` & `/config/rewrites.js`
- `gatsby-cloud` - uses the `createRedirect` function from the `createPages` lifecycle event inside `gatsby-node.js` to create redirects based on contents in `/config/redirects.js` & `/config/rewrites.js`. Adds the `gatsby-plugin-gatsby-cloud` plugins to the `gatsby-config.js` file.
- `other` - uses the `createRedirect` function from the `createPages` lifecycle event inside `gatsby-node.js` to create redirects based on contents in `/config/redirects.js` & `/config/rewrites.js`

By default the redirects manager (`/config/redirectsManager.js`) will create files for all three options if `HOST` is not set.

### Fonts

Add webfonts to `src/assets` and update imports + styling in `src/components/Theme/Fonts`

### Colors

Update color in `src/components/Theme/Colors`

### Website Config

You can configure many global site settings in `/config/website`:

```JS
module.exports = {
  pathPrefix: `/`, // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: `LAM Landingpage Template`, // Default Site Title used for SEO & PWA
  description: `LAM Landingpage Template`, // Default Site Decription used for SEO
  siteName: `LAM Landingpage Template`, // Sitename for Facebook
  banner: `/open-graph.jpg`, // Default OpenGraph image
  ogLanguage: `en_AU`, // Facebook Language
  socialLinks: [``], // Array of social links (facebook, insta, etc)
  // JSONLD / Manifest
  icon: `/favicon-light-mode.png`, // Used for manifest favicon, splash screen, and icon generation
  shortName: `Landingpage`, // shortname for manifest. MUST be shorter than 12 characters
  author: `Love + Money`, // Author for schemaORGJSONLD
  themeColor: `#000000`, // PWA Icon background & address bar color if installed on desktop
  backgroundColor: `#000000`, // PWA color shown before styles and content loads, should match the background-color CSS property in the site’s stylesheet
  twitterUsername: `` // Twitter Username
}
```
