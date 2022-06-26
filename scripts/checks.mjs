import { $, argv } from "zx";

(async () => {
  // Check types
  if (argv.types) {
    await $`tsc && tsc --project packages/orbit-components/cypress`;
    await $`flow check`;
  }
  // Check links
  if (argv.links) {
    await $`remark -e '.mdx' -q -u validate-links docs/src/documentation --no-config`;
    await $`ts-node -p packages/orbit-docs/tsconfig.json packages/orbit-docs/services/checkLinks.ts`;
  }
  // Check component statuses for update
  if (argv.statuses) {
    await $`node --loader ts-node/esm packages/orbit-docs/services/componentStatuses.ts`;
  }
})();
