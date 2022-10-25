module.exports = {
  pathPrefix: `/`, // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: `Blip Club`, // Default Site Title used for SEO & PWA
  description: `Blip is on a mission to assist you in your journey to quit smoking with nicotine replacement therapies and digital support tools. Not too early, never too late. Start your smoking cessation journey today.`, // Default Site Decription used for SEO
  siteName: `Blip Club`, // Sitename for Facebook
  banner: `/og-image.png`, // Default OpenGraph image
  ogLanguage: `en_AU`, // Facebook Language
  socialLinks: [``], // Array of social links (facebook, insta, etc)
  // JSONLD / Manifest
  icon: `/favicon-light-mode.png`, // Used for manifest favicon, splash screen, and icon generation
  shortName: `Blip Club`, // shortname for manifest. MUST be shorter than 12 characters
  author: `Love + Money`, // Author for schemaORGJSONLD
  themeColor: `#000000`, // PWA Icon background & address bar color if installed on desktop
  backgroundColor: `#000000`, // PWA color shown before styles and content loads, should match the background-color CSS property in the site’s stylesheet
  twitterUsername: `` // Twitter Username
};
