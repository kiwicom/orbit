import { $, argv, globby, path } from "zx";

(async () => {
  // Check types
  if (argv.types) {
    // eslint-disable-next-line no-restricted-syntax
    for (const configPath of await globby("**/tsconfig.json", { gitignore: true })) {
      await $`tsc --project ${path.dirname(configPath)} --noEmit --emitDeclarationOnly false`;
    }
  }
  // Check links
  if (argv.links) {
    await $`remark -e '.mdx' -q -u validate-links docs/src/documentation --no-config`;
    await $`tsc docs/services/checkLinks.ts --noEmit --skipLibCheck --esModuleInterop --moduleResolution node --downlevelIteration`;
  }
  // Check component statuses for update
  if (argv.statuses) {
    await $`ts-node --esm docs/services/componentStatuses.ts`;
  }
})();
