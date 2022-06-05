import { $ } from "zx";

(async () => {
  $.verbose = false;

  await $`yarn clean`;
  await $`yarn tsc`;
  await $`yarn tsc-esm-fix --target='dist' --ext='.js' --dirnameVar=false --filenameVar=false`;

  $.verbose = true;
})();
