module.exports = {
  plugins: [
    {
      resolve: "gatsby-theme-portfolio-minimal",
      options: {
        siteUrl: "https://alisonlouisemyers.com", // Used for sitemap generation
        manifestSettings: {
          favicon: "./content/images/icons8-am-radio-96.png", // Path is relative to the root
          siteName: "The Portfolio of Alison Louise Myers", // Used in manifest.json
          shortName: "A.M. Portfolio", // Used in manifest.json
          startUrl: "/", // Used in manifest.json
          backgroundColor: "#FFFFFF", // Used in manifest.json
          themeColor: "#000000", // Used in manifest.json
          display: "minimal-ui", // Used in manifest.json
        },
        contentDirectory: "./content",
        blogSettings: {
          path: "/blog", // Defines the slug for the blog listing page
          usePathPrefixForArticles: false, // Default true (i.e. path will be /blog/first-article)
        }, 
        // googleAnalytics: {
        //     trackingId: "G-WY6465L6MK",
        //     anonymize: true, // Default true
        //     environments: ["production", "development"] // Default ["production"]
        // },
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "G-N6RY3BCFL9",
        head: false,
        anonymize: true,
        respectDNT: true,
        exclude: [],
        pageTransitionDelay: 0,
        defer: false,
        enableWebVitalsTracking: true,
      },
    }
  ],
};
