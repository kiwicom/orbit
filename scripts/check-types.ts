import { $, globby, path } from "zx";

(async () => {
  for (const configPath of await globby("**/tsconfig.json", { gitignore: true })) {
    await $`tsc --project ${path.dirname(configPath)} --noEmit --emitDeclarationOnly false`;
  }

  await $`flow check`;
})();
