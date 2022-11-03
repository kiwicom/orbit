import { $, argv } from "zx";

(async () => {
  // Check types
  if (argv.types) {
    await $`tsc && tsc --project docs && tsc --project packages/orbit-components/cypress`;
    await $`flow check`;
  }
  // Check links
  if (argv.links) {
    await $`remark -e '.mdx' -q -u validate-links docs/src/documentation --no-config`;
    await $`ts-node -p docs/tsconfig.jsn docs/services/checkLinks.ts`;
  }
  // Check component statuses for update
  if (argv.statuses) {
    await $`zx docs/services/componentStatuses.mjs`;
  }

  if (argv.css) {
    await $`yarn workspace @kiwicom/orbit-components stylelint "./src/**/*.jsx"`;
    await $`yarn workspace @kiwicom/orbit.kiwi stylelint "./src/**/*.tsx"`;
  }
})();
