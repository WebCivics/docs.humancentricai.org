const path = require("path");
const pathPrefix = "/";
const siteMetadata = {
  title: "Human Centric AI CG.",
  shortName: "HumanCentricAI",
  description:
    "This is for the development of HumanCentric AI related Documentation.",
  twitterName: "webcivics",
  imageUrl: "/dalipainting.jpg",
  siteUrl: "https://docs.humancentricai.org",
};
module.exports = {
  siteMetadata,
  pathPrefix,
  flags: {
    DEV_SSR: true,
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: `${__dirname}/..`,
        ignore: [`**/\.*/**/*`],
      },
    },
    {
      resolve: "gatsby-theme-primer-wiki",
      options: {
        nav: [
          {
            title: "Github",
            url: "https://github.com/WebCivics/docs.humancentricai.org/",
          },
          {
            title: "Twitter",
            url: "https://twitter.com/webcivics",
          },
        ],
        editUrl:
          "https://github.com/WebCivics/docs.humancentricai.org/tree/main/",
        },
      },
      {
        resolve: "gatsby-plugin-manifest",
        options: {
          name: siteMetadata.title,
          short_name: siteMetadata.shortName,
          start_url: pathPrefix,
          background_color: `#f7f0eb`,
          editUrlText: "Suggest Edit on Github", // edit url text
          display: `standalone`,
          shouldSupportTags: true,
          tagText: "Tags",
          icon: path.resolve(__dirname, "./static/logo.png"),
        },
      },
      {
        resolve: `gatsby-plugin-sitemap`,
      },
      {
        resolve: "gatsby-plugin-robots-txt",
        options: {
          host: siteMetadata.siteUrl,
          sitemap: `${siteMetadata.siteUrl}/sitemap/sitemap-index.xml`,
          policy: [{ userAgent: "*", allow: "/" }],
        },
      },
      {
        resolve: `gatsby-plugin-google-gtag`,
        options: {
          // You can add multiple tracking ids and a pageview event will be fired for all of them.
          trackingIds: [],
        },
      },
    ],
  };
