import { $, chalk, globby, fs } from "zx";
import * as babel from "@babel/core";
import ora from "ora";

const logStep = msg => {
  console.log(`\n${chalk.yellow.underline(msg)}`);
};

(async () => {
  if (argv.size) {
    console.log(
      chalk.magentaBright(
        `\nThe --size flag is on, meaning that we're building only what is necessary for measuring size.`,
      ),
    );
  }

  logStep("Cleanup");

  await $`rimraf lib es umd "src/icons/*.{js?(x),js?(x).flow,d.ts}" orbit-icons-font orbit-icons-font.zip orbit-svgs.zip .out`;

  logStep("Building icons");

  await $`babel-node config/buildIcons.js`;

  if (!argv.size) {
    await $`babel-node config/createSVGFont.js`;
    await $`cd src/icons; zip -r ../../orbit-svgs.zip ./svg; cd -`;
    await $`zip -j orbit-svgs.zip orbit-icons-font/orbit-icons.svg`;
    await $`zip -r orbit-icons-font.zip orbit-icons-font`;
  }

  logStep("Compiling source");

  const files = await globby("**/*.js?(x)", {
    cwd: "src",
    ignore: [
      "**/__tests__/**",
      "**/*.test.*",
      "**/__typetests__/**",
      "**/examples.*",
      "**/*.stories.*",
    ],
  });

  const commonJs = ["CommonJS", "lib", await babel.loadOptions()];
  const esModules = ["ES Modules", "es", await babel.loadOptions({ envName: "esm" })];

  for (const [name, dir, options] of argv.size ? [commonJs] : [commonJs, esModules]) {
    const spinner = ora(name).start();
    for (const file of files) {
      const result = await babel.transformFileAsync(`src/${file}`, options);
      await fs.outputFile(`${dir}/${file.replace(/\.jsx$/, ".js")}`, result.code);
    }
    spinner.succeed(`${name} → ${dir}`);
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

    for (const file of await globby("{lib,es}/**/*.jsx.flow")) {
      await fs.rename(file, file.replace(/\.jsx\.flow$/, ".js.flow"));
    }
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
