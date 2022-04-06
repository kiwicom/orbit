// import path from "path";

const config = {
  plugins: [
    {
      resolve: `gatsby-transformer-json`,
      options: {
        typeName: `Tracking`,
      },
    },
    // {
    //   resolve: "gatsby-source-filesystem",
    //   options: {
    //     name: "data",
    //     path: path.resolve(__dirname, "../../data"),
    //   },
    // },
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/dashboard/*`] },
    },
  ],
};

export default config;
