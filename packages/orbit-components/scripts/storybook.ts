import { $ } from "zx";

(async () => {
  await $`babel-node config/buildIcons.js`;
  await $`build-storybook -c .storybook -o .out`;
})();
