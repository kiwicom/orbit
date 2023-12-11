import { $, argv, chalk } from "zx";

import compileSource from "./compileSource.mjs";
import { logStep } from "./helpers.mjs";
import { OUTPUT_PATTERNS } from "./consts.mjs";
import generateTypeDeclarations from "./generateDeclarations.mjs";
import buildSize from "./buildSize.mjs";

(async () => {
  logStep("Cleanup");

  await $`del ${OUTPUT_PATTERNS}`;

  logStep("Building tailwind");

  await $`yarn tailwind`;

  logStep("Building icons");

  await $`node --loader ts-node/esm config/build/buildIcons.mts`;

  if (argv.size) {
    console.log(
      chalk.magentaBright(
        `\nThe --size flag is on, meaning that we're building only what is necessary for measuring size.`,
      ),
    );
  }

  if (!argv.size) {
    await $`node --loader ts-node/esm config/createSVGFont.mts`;
    await $`cd src/icons; zip -r ../../orbit-svgs.zip ./svg; cd -`;
    await $`zip -j orbit-svgs.zip orbit-icons-font/orbit-icons.svg`;
    await $`zip -r orbit-icons-font.zip orbit-icons-font`;
  }

  logStep("Compiling source");

  await compileSource();

  if (argv.size) {
    await buildSize();
  } else {
    logStep("Type declarations");
    await generateTypeDeclarations();

    logStep("Copying dictionaries and documentation");
    await $`cpy "**/*.{md,json}" ../lib --cwd src --parents`;
    await $`cpy "**/*.{md,json}" ../es --cwd src --parents`;
  }
})();
