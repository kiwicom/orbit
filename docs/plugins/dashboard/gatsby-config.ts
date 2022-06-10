const config = {
  plugins: [
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/dashboard/*`] },
    },
  ],
};

export default config;
