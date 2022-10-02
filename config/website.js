module.exports = {
  pathPrefix: `/`, // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: `Loungeface`, // Default Site Title used for SEO & PWA
  description: `Loungeface`, // Default Site Decription used for SEO
  siteName: `Loungeface`, // Sitename for Facebook
  siteLanguage: `en`, // Language Tag on <html> element
  banner: `/open-graph.jpg`, // Default OpenGraph image
  ogLanguage: `en_AU`, // Facebook Language
  socialLinks: [``], // Array of social links (facebook, insta, etc)
  // JSONLD / Manifest
  icon: `src/images/icon.png`, // Used for manifest favicon, splash screen, and icon generation
  shortName: `Loungeface`, // shortname for manifest. MUST be shorter than 12 characters
  author: `Love + Money`, // Author for schemaORGJSONLD
  themeColor: `#000000`, // PWA Icon background & address bar colour if installed on desktop
  backgroundColor: `#000000`, // PWA colour shown before styles and content loads, should match the background-color CSS property in the site’s stylesheet
  twitter: `` // Twitter Username
};
