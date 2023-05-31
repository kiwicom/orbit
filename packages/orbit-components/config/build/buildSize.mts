import { fs, $ } from "zx";
import dedent from "dedent";

import { logStep } from "./helpers.mjs";

export default async function buildSize() {
  await fs.outputFile(
    `es/size-measurer.js`,
    dedent`
        import * as Orbit from ".";
        import * as rtl from "./utils/rtl";

        export { Orbit, rtl };
      `,
  );

  logStep("Copying dictionaries");

  await $`cpy "**/*.json" ../lib --cwd src --parents`;
  await $`cpy "**/*.json" ../es --cwd src --parents`;
}
