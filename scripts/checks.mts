import { $, argv } from "zx";

(async () => {
  // Check links
  if (argv.links) {
    await $`remark -e '.mdx' -q -u validate-links docs/src/documentation --no-config`;
    await $`tsc docs/services/checkLinks.ts --noEmit --skipLibCheck --esModuleInterop --moduleResolution node --downlevelIteration`;
  }
})();
