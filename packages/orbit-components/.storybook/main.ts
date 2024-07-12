/* eslint-disable no-param-reassign */
import path, { dirname, join } from "path";
import type { StorybookConfig } from "@storybook/react-webpack5";

function getAbsolutePath(value: string): string {
  return dirname(require.resolve(join(value, "package.json")));
}

const config: StorybookConfig = {
  staticDirs: [path.resolve(__dirname, "../static")],
  stories: ["../src/**/*.stories.*"],
  framework: getAbsolutePath("@storybook/react-webpack5"),

  addons: [
    getAbsolutePath("@storybook/addon-knobs"),
    getAbsolutePath("@storybook/addon-a11y"),
    getAbsolutePath("storybook-addon-pseudo-states"),
    {
      name: getAbsolutePath("@storybook/addon-essentials"),
      options: {
        controls: false,
      },
    },
    {
      // eslint-disable-next-line storybook/no-uninstalled-addons
      name: "@storybook/addon-styling",
      options: {
        postCss: true,
      },
    },
  ],
  webpackFinal(cfg) {
    if (cfg) {
      // resolve to .js rather than .mjs to avoid webpack failing because of ambiguous imports
      cfg.resolve.extensions = cfg.resolve.extensions.filter(ext => ext !== ".mjs");
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
