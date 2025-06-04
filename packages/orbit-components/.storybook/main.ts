/* eslint-disable no-param-reassign */
import path, { dirname, join } from "path";
import type { StorybookConfig } from "@storybook/react-webpack5";

function getAbsolutePath(value: string): string {
  return dirname(require.resolve(join(value, "package.json")));
}

const config: StorybookConfig = {
  staticDirs: [path.resolve(__dirname, "../static"), path.resolve(__dirname, "../.playroom")],
  stories: ["../src/**/*.stories.*"],
  framework: getAbsolutePath("@storybook/react-webpack5"),

  addons: [
    getAbsolutePath("@storybook/addon-controls"),
    getAbsolutePath("@storybook/addon-a11y"),
    getAbsolutePath("storybook-addon-pseudo-states"),
    {
      name: getAbsolutePath("@storybook/addon-essentials"),
      options: {
        controls: false,
      },
    },
    {
      name: getAbsolutePath("@storybook/addon-styling-webpack"),
      options: {
        rules: [
          {
            test: /\.css$/,
            sideEffects: true,
            use: [
              "style-loader",
              {
                loader: "css-loader",
                options: { importLoaders: 1 },
              },
              {
                loader: "postcss-loader",
                options: { implementation: require.resolve("postcss") },
              },
            ],
          },
        ],
      },
    },
  ],

  webpackFinal(cfg) {
    if (cfg) {
      // resolve to .js rather than .mjs to avoid webpack failing because of ambiguous imports
      cfg.resolve.extensions = cfg.resolve.extensions.filter(ext => ext !== ".mjs");

      // Add Node.js polyfills for browser compatibility
      // These modules are used by Storybook's testing infrastructure but aren't available in browsers
      cfg.resolve.fallback = {
        ...cfg.resolve.fallback,
        // Use proper polyfills for Node.js modules
        tty: require.resolve("tty-browserify"),
        os: require.resolve("os-browserify/browser"),
      };

      cfg.module.rules.push({
        test: /\.(ts|tsx|mts)$/,
        loader: require.resolve("babel-loader"),
        options: {
          presets: ["@babel/preset-typescript"],
        },
      });
      cfg.resolve.extensions.push(".ts", ".tsx", ".mts");
      return cfg;
    }
    return undefined;
  },
};

export default config;
