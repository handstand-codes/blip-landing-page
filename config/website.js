module.exports = {
  pathPrefix: `/`, // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: `Love + Money Brand Guidelines`, // Default Site Title used for SEO & PWA
  description: `Love + Money is Always Beta™`, // Default Site Decription used for SEO
  siteName: `Love + Money Brand Guidelines Template`, // Sitename for Facebook
  siteLanguage: `en`, // Language Tag on <html> element
  banner: `/open-graph.jpg`, // Default OpenGraph image
  ogLanguage: `en_AU`, // Facebook Language
  socialLinks: [
    `https://www.instagram.com/loveandmoney.agency`,
    `https://loveandmoney.substack.com/`,
    `https://app.slack.com/accept-shared-channel/T02TXJQPT/I021CK6TD36/zt-q47wb8kk-ON9cOJv1i2T1oyaXGLGWjA`
  ], // Array of social links (facebook, insta, etc)
  // JSONLD / Manifest
  icon: `src/images/icon.png`, // Used for manifest favicon, splash screen, and icon generation
  shortName: `PWA Name`, // shortname for manifest. MUST be shorter than 12 characters
  author: `PWA Author`, // Author for schemaORGJSONLD
  themeColor: `#000000`, // PWA Icon background & address bar colour if installed on desktop
  backgroundColor: `#000000`, // PWA colour shown before styles and content loads, should match the background-color CSS property in the site’s stylesheet
  twitter: `` // Twitter Username
};
