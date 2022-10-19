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
};
