import { $, argv } from "zx";

(async () => {
  // Check types
  if (argv.types) {
    await $`lerna run check:types`;
    await $`yarn docs:check:types`;
  }
  // Check links
  if (argv.links) {
    await $`remark -e '.mdx' -q -u validate-links docs/src/documentation --no-config`;
    await $`tsc docs/services/checkLinks.mts --downlevelIteration --esModuleInterop --resolveJsonModule --noEmit --skipLibCheck`;
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
