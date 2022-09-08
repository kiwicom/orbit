import { $, argv, chalk } from "zx";

// @ts-expect-error FIXME: currently ts has some issue with importing mts ext
import compileSource from "./compileSource.mts";
// @ts-expect-error FIXME: currently ts has some issue with importing mts ext
import { logStep } from "./helpers.mts";
// @ts-expect-error FIXME: currently ts has some issue with importing mts ext
import { OUTPUT_PATTERNS } from "./consts.mts";
// @ts-expect-error FIXME: currently ts has some issue with importing mts ext
import generateTypeDeclarations from "./generateDeclarations.mts";
// @ts-expect-error FIXME: currently ts has some issue with importing mts ext
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

    logStep("Copying dictionaries and documentation");
    await $`cpy "**/*.{md,json}" ../lib --cwd src --parents`;
    await $`cpy "**/*.{md,json}" ../es --cwd src --parents`;
  }
})();
