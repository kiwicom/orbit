import { $ } from "zx";

(async () => {
  await $`babel-node config/buildIconComponents.js`;
  await $`build-storybook --config-dir .storybook --output-dir .out --static-dir ./static`;
})();
