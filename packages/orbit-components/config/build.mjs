import { $, chalk, globby, fs, argv } from "zx";
import * as babel from "@babel/core";
import flowgen from "flowgen";
import dedent from "dedent";
import ora from "ora";

const OUTPUT_PATTERNS = [
  "lib",
  "es",
  "umd",
  ".out",
  "src/icons/*.{js?(x),js?(x).flow,d.ts}",
  "orbit-icons-font",
  "orbit-icons-font.zip",
  "orbit-svgs.zip",
];

const COMPILE_IGNORE_PATTERNS = [
  "**/*.d.ts",
  "**/*.stories.*",
  "**/*.test.*",
  "**/__tests__/**/*",
  "**/__typetests__/**/*",
  "**/__examples__/*.*",
  "**/examples.*",
];

const logStep = msg => console.log(`\n${chalk.yellow.underline(msg)}`);

(async () => {
  if (argv.size) {
    console.log(
      chalk.magentaBright(
        `\nThe --size flag is on, meaning that we're building only what is necessary for measuring size.`,
      ),
    );
  }

  logStep("Cleanup");

  await $`del ${OUTPUT_PATTERNS}`;

  logStep("Building icons");

  await $`babel-node config/buildIcons.js`;

  if (!argv.size) {
    await $`babel-node config/createSVGFont.js`;
    await $`cd src/icons; zip -r ../../orbit-svgs.zip ./svg; cd -`;
    await $`zip -j orbit-svgs.zip orbit-icons-font/orbit-icons.svg`;
    await $`zip -r orbit-icons-font.zip orbit-icons-font`;
  }

  logStep("Compiling source");

  const files = await globby("**/*.{js,jsx,ts,tsx}", {
    cwd: "src",
    ignore: COMPILE_IGNORE_PATTERNS,
  });

  const commonJs = ["CommonJS", "lib", await babel.loadOptions()];
  const esModules = ["ES Modules", "es", await babel.loadOptions({ envName: "esm" })];

  for (const [name, dir, options] of [commonJs, esModules]) {
    console.log(chalk.greenBright(`Compiling files for ${name}`));
    const spinner = ora(name).start();

    for (const file of files) {
      const result = await babel.transformFileAsync(`src/${file}`, options);
      await fs.outputFile(`${dir}/${file.replace(/\.[jt]sx?$/, ".js")}`, result.code);
    }

    spinner.succeed(`${name} → ${dir}`);
  }

  if (argv.size) {
    // https://github.com/ai/size-limit/issues/265
    await fs.outputFile(
      `es/size-measurer.js`,
      dedent`
        import * as Orbit from ".";
        import * as rtl from "./utils/rtl";

        export { Orbit, rtl };
      `,
    );
  }

  if (!argv.size) {
    const spinner = ora("UMD").start();
    $.verbose = false;
    await $`webpack --mode=production`;
    $.verbose = true;
    spinner.succeed(`UMD → umd`);

    logStep("Type declarations");

    await $`babel-node config/typeFiles.js`;

    await $`cpy "**/*.{js?(x).flow,d.ts}" ../lib --cwd src --parents`;
    await $`cpy "**/*.{js?(x).flow,d.ts}" ../es --cwd src --parents`;
    await $`del tsconfig.tsbuildinfo`; // reset potential incremental compilation information
    await $`tsc`;

    for (const file of await globby("{lib,es}/**/*.jsx.flow")) {
      await fs.rename(file, file.replace(/\.jsx\.flow$/, ".js.flow"));
    }

    console.log(chalk.greenBright("Generating Flow declarations..."));
    const tsDeclarations = await globby("lib/**/*.d.ts");
    await Promise.all(
      tsDeclarations.map(async tsDeclPath => {
        try {
          const flowDeclPath = tsDeclPath.replace(".d.ts", ".js.flow");
          if (await fs.pathExists(flowDeclPath)) return;
          const flowDecl = await flowgen.compiler.compileDefinitionFile(tsDeclPath, {
            interfaceRecords: true,
          });
          const content = dedent`
            // @flow
            ${flowgen.beautify(
              flowDecl
                .replace("import React from", "import * as React from")
                .replace("React.FC", "React.StatelessFunctionalComponent"),
            )}
          `;
          await fs.writeFile(flowDeclPath, content);
        } catch (err) {
          if (err instanceof Error) {
            err.message = dedent`
              Failed to create a Flow libdef
              ${__dirname}/${tsDeclPath}
              ${err.message}
            `;
            throw err;
          }
        }
      }),
    );
  }

  if (argv.size) {
    logStep("Copying dictionaries");

    await $`cpy "**/*.json" ../lib --cwd src --parents`;
    await $`cpy "**/*.json" ../es --cwd src --parents`;
  } else {
    logStep("Copying dictionaries and documentation");

    await $`cpy "**/*.{md,json}" ../lib --cwd src --parents`;
    await $`cpy "**/*.{md,json}" ../es --cwd src --parents`;
  }
})();
