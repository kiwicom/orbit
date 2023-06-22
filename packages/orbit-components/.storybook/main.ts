import path from "path";
// import { mergeConfig } from "vite";
import type { StorybookConfig } from "@storybook/react-vite";
// import react from "@vitejs/plugin-react";

const config: StorybookConfig = {
  staticDirs: [path.resolve(__dirname, "../static")],
  stories: ["../src/**/*.stories.*"],
  framework: "@storybook/react-vite",
  core: {
    builder: "@storybook/builder-vite",
  },
  addons: [
    {
      name: "@storybook/addon-essentials",
      options: {
        controls: false,
      },
    },
    "@storybook/addon-knobs",
  ],
  async viteFinal(cfg: any) {
    return cfg;
    // return mergeConfig(cfg, {
    //   plugins: [
    //     react({
    //       include: [/\.jsx$/, /\.tsx$/],
    //       jsxRuntime: "classic",
    //       babel: {},
    //     }),
    //   ],
    // });
  },
};

export default config;
