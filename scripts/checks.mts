import { $, argv } from "zx";

(async () => {
  // Check types
  if (argv.types) {
    await $`lerna run check:types`;
    await $`cd docs && yarn check:types`;
  }
  // Check component statuses for update
  if (argv.statuses) {
    await $`zx docs/services/componentStatuses.mjs`;
  }

  if (argv.css) {
    await $`yarn workspace @kiwicom/orbit-components stylelint "./src/**/*.tsx"`;
    await $`yarn stylelint "./docs/src/**/*.tsx"`;
  }
})();
