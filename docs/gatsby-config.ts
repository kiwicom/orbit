import tokensPkg from "@kiwicom/orbit-design-tokens/package.json";
import path from "path";
import deflist from "remark-deflist";
import componentsPkg from "@kiwicom/orbit-components/package.json";
import type { GatsbyConfig } from "gatsby";

const innerPlugins = [
  {
    resolve: path.resolve("./plugins/contributors"),
    options: {
      repo: "orbit",
      owner: "kiwicom",
    },
  },
  {
    resolve: path.resolve("./plugins/sandbox"),
    options: {
      path: "src/__examples__",
    },
  },
  {
    resolve: path.resolve("./plugins/dashboard"),
  },
];

const config: GatsbyConfig = {
  siteMetadata: {
    title: "Orbit",
    description: "Open source design system for your next travel project.",
    siteUrl: "https://orbit.kiwi/",
    author: "Kiwi.com",
    version: {
      components: componentsPkg.version,
      tokens: tokensPkg.version,
    },
  },
  plugins: [
    ...(process.env.CLOUDFLARE_BUILD_ENV === "preview"
      ? []
      : [
          {
            resolve: "gatsby-plugin-google-gtag",
            options: {
              trackingIds: ["UA-118988244-1"],
            },
          },
        ]),
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "documentation",
        path: path.resolve("src/documentation"),
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: path.resolve("src/pages"),
      },
    },
    "gatsby-remark-images",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: path.resolve("./plugins/gatsby-remark-figma-images"),
            options: {
              path: path.resolve("src/figma-images"),
              format: "png",
              scale: 2,
            },
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              linkImagesToOriginal: false,
              // The base for generating different image widths
              // Content max width is 80rem (about 809px with no zoom)
              // Minus paddings on each side
              maxWidth: 745,
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
        remarkPlugins: [deflist],
        rehypePlugins: [],
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/orbit-glyph.svg",
        icons: [
          {
            src: "src/images/orbit-icon-192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "src/images/orbit-icon-512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: "./src/images",
      },
    },
    {
      resolve: "gatsby-redirect-from",
      options: {
        query: "allMdx",
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-meta-redirect",
    "gatsby-plugin-lodash",
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        snippets: path.resolve("src/snippets"),
      },
    },
    ...innerPlugins,
  ],
};

export default config;
