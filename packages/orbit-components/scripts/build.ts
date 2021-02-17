import { $, globby, fs, chalk } from "zx";
import flowgen from "flowgen";
import dedent from "dedent";
import * as babel from "@babel/core";

const OUTPUT_PATTERNS = [
  "lib",
  "es",
  "umd",
  ".out",
  "src/icons/*.{js,js.flow,d.ts}",
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

(async () => {
  await $`del ${OUTPUT_PATTERNS}`;

  await $`babel-node config/buildIconComponents.js`;

  const files = await globby("src/**/*.{js,jsx,ts,tsx}", {
    ignore: COMPILE_IGNORE_PATTERNS,
  });

  for (const [platform, envName, dir] of [
    ["CommonJS", "cjs", "lib"],
    ["ES Modules", "esm", "es"],
  ]) {
    console.log(chalk.greenBright(`Compiling files for ${platform}`));
    await Promise.all(
      files.map(async file => {
        const config = await babel.loadPartialConfigAsync({ filename: file, envName });
        if (!config) throw new Error(`Failed to load config for ${file}`);
        const result = await babel.transformFileAsync(file, { ...config.options, filename: file });
        if (!result) throw new Error(`Failed to compile ${file}`);
        await fs.outputFile(file.replace(/^src/, dir).replace(/\.tsx?$/, ".js"), result.code);
      }),
    );
  }

  await $`webpack --mode production`;

  await $`babel-node config/generateTypeDeclarations.js`;
  await $`cpy --cwd src --parents '**/*.{d.ts,js.flow}' '!typings/**/*.d.ts' ../lib`;

  await $`del tsconfig.tsbuildinfo`; // reset potential incremental compilation information
  await $`tsc`;

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

  await $`cpy --cwd lib --parents '**/*.{d.ts,js.flow}' ../es`;

  await $`babel-node config/createSVGFont.js`;
  await $`zip -r orbit-svgs.zip src/icons/svg`;
  await $`zip -j orbit-svgs.zip orbit-icons-font/orbit-icons.svg`;
  await $`zip -r orbit-icons-font.zip orbit-icons-font`;

  await $`cpy --cwd src --parents '**/*.{md,json}' ../lib`;
  await $`cpy --cwd src --parents '**/*.{md,json}' ../es`;
})();
