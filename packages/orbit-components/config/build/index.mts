import { $, argv, chalk } from "zx";

// @ts-expect-error TODO
import compileSource from "./compileSource.mts";
// @ts-expect-error TODO
import { logStep } from "./helpers.mts";
// @ts-expect-error TODO
import { OUTPUT_PATTERNS } from "./consts.mts";
// @ts-expect-error TODO
import generateTypeDeclarations from "./generateDeclarations.mts";
// @ts-expect-error TODO
import renameTypeDeclarations from "./renameTypeDeclarations.mts";
// @ts-expect-error TODO
import buildSize from "./buildSize.mts";

(async () => {
  logStep("Cleanup");

  await $`del ${OUTPUT_PATTERNS}`;

  logStep("Building icons");

  await $`ts-node --esm config/build/buildIcons.mts`;

  if (argv.size) {
    console.log(
      chalk.magentaBright(
        `\nThe --size flag is on, meaning that we're building only what is necessary for measuring size.`,
      ),
    );
  }

  if (!argv.size) {
    await $`ts-node --esm config/createSVGFont.mts`;
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
    // TODO: remove after complete switch to ts
    await renameTypeDeclarations();

    logStep("Copying dictionaries and documentation");
    await $`cpy "**/*.{md,json}" ../lib --cwd src --parents`;
    await $`cpy "**/*.{md,json}" ../es --cwd src --parents`;
  }
})();
