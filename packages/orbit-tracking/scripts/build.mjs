import { $ } from "zx";

(async () => {
  await $`yarn clean`;
  await $`yarn tsc`;
  await $`yarn tsc-esm-fix --target='dist' --ext='.js' --dirnameVar=false --filenameVar=false`;
})();
