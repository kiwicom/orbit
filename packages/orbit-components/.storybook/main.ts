import path from "path";
import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  staticDirs: [path.resolve(__dirname, "../static")],
  stories: ["../src/**/*.stories.*"],
  framework: "@storybook/react-vite",
  core: {
    builder: "@storybook/builder-vite",
  },
  addons: [
    "@storybook/addon-knobs",
    {
      name: "@storybook/addon-essentials",
      options: {
        controls: false,
      },
    },
  ],
  async viteFinal(cfg: any) {
    return cfg;
  },
};

export default config;
