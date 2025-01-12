const path = require("path");
const { defaultFoundation } = require("@kiwicom/orbit-design-tokens");

module.exports = {
  title: "Orbit Playroom",
  components: require.resolve("./playroomComponents.tsx"),
  outputPath: "./.playroom",
  frameComponent: "./playroom/FrameComponent.tsx",
  snippets: "./playroom/snippets.ts",
  port: 9000,
  openBrowser: false,
  widths: Object.values(defaultFoundation.breakpoint),
  baseUrl: "/",
  webpackConfig: () => ({
    resolve: {
      extensions: [".js", ".jsx", ".ts", ".tsx", ".css"],
      modules: [
        "node_modules",
        path.resolve(__dirname),
        path.resolve(__dirname, "src"),
        path.resolve(__dirname, "lib"),
        path.resolve(__dirname, "node_modules"),
        path.resolve(__dirname, "../.."),
      ],
      alias: {
        "@kiwicom/orbit-components": path.resolve(__dirname),
      },
    },
    module: {
      rules: [
        {
          test: /\.css$/i,
          sideEffects: true,
          exclude: /node_modules/,
          use: [
            require.resolve("style-loader"),
            require.resolve("css-loader"),
            {
              loader: require.resolve("postcss-loader"),
              options: {
                postcssOptions: {
                  plugins: [require.resolve("tailwindcss"), require.resolve("autoprefixer")],
                },
              },
            },
          ],
        },
        {
          test: /\.(js|jsx|ts|tsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript"],
            },
          },
        },
      ],
    },
  }),
};
