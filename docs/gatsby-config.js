const path = require("path");

const warnMissingAccessTokens = require("./utils/warnings");

(() => {
  try {
    require("dotenv-safe").config({
      example: path.resolve(__dirname, `../.env.example`),
      path: path.resolve(__dirname, `../.env`),
      allowEmptyValues: true,
    });
  } catch (error) {
    warnMissingAccessTokens(error);
  }
})();

module.exports = {
  siteMetadata: {
    title: "Orbit",
    description: "Open source design system for your next travel project.",
    siteUrl: "https://orbit.kiwi/",
    author: "Kiwi.com",
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "documentation",
        path: `${__dirname}/src/documentation`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages`,
      },
    },
    "gatsby-remark-images",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: require.resolve("../packages/gatsby-remark-figma-images"),
            options: {
              path: `${__dirname}/src/figma-images`,
              format: "png",
              scale: 2,
              accessToken: process.env.FIGMA_TOKEN,
            },
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              linkImagesToOriginal: false,
              // The base for generating different image widths.
              maxWidth: 590,
              showCaptions: ["title"],
            },
          },
          {
            resolve: `gatsby-remark-copy-linked-files`,
            options: {
              ignoreFileExtensions: [`png`, `jpg`, `jpeg`, `bmp`, `tiff`, `md`, `mdx`],
            },
          },
          {
            resolve: `gatsby-remark-smartypants`,
            options: {
              backticks: false,
              dashes: `oldschool`,
            },
          },
        ],
        remarkPlugins: [require("remark-deflist")],
        rehypePlugins: [],
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-redirect-from",
      options: {
        query: "allMdx",
      },
    },
    // our custom plugins place here:
    {
      resolve: require.resolve("./plugins/contributors"),
      options: {
        repo: "orbit",
        owner: "kiwicom",
      },
    },
    {
      resolve: require.resolve("./plugins/sandbox"),
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-meta-redirect",
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        snippets: path.join(__dirname, "src/snippets"),
      },
    },
  ],
};
