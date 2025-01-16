const path = require("path");
const { defaultFoundation } = require("@kiwicom/orbit-design-tokens");

module.exports = {
  title: "Orbit Playroom",
  components: require.resolve("./playroomComponents.tsx"),
  outputPath: "./.playroom/playroom",
  frameComponent: "./playroom/FrameComponent.tsx",
  snippets: "./playroom/snippets/index.ts",
  scope: "./playroom/scope.ts",
  port: 9000,
  openBrowser: false,
  widths: Object.values(defaultFoundation.breakpoint),
  defaultVisibleWidths: [
    defaultFoundation.breakpoint.mediumMobile,
    defaultFoundation.breakpoint.desktop,
  ],
  baseUrl: "/playroom/",
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
  reactDocgenTypescriptConfig: {
    // TODO: Disabling prop intellisense until we can fix the issue with correctly getting the props
    propFilter: () => false,
  },
  exampleCode: `
  <div className="bg-white-normal p-300 h-screen">
    <Context>
      {() => {
        const [hasError, setHasError] = React.useState(false);

        return (
          <Button
            onClick={() => setHasError(!hasError)}
            type={hasError ? "critical" : "primary"}
          >
            {hasError ? "Ups, click again" : "Click Me"}
          </Button>
        );
      }}
    </Context>
  </div>
`,
};
