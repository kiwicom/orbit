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
    "gatsby-remark-images",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [`.mdx`, `.md`],
        remarkPlugins: [],
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
      resolve: `@gatsby-contrib/gatsby-plugin-elasticlunr-search`,
      options: {
        fields: ["title", "excerpt", "path"],
        resolvers: {
          Mdx: {
            title: n => n.frontmatter.title,
            excerpt: n => n.frontmatter.excerpt,
            path: n => n.fields.slug,
          },
        },
      },
    },
  ],
};
