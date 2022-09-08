import { path, fs, globby, chalk, $ } from "zx";
import babel from "@babel/core";
import ora from "ora";

// @ts-expect-error FIXME: currently ts has some issue with importing mts ext
import { COMPILE_IGNORE_PATTERNS } from "./consts.mts";

type ModuleItem = ["cjs" | "esm", string, babel.TransformOptions | undefined | null];

const parseFile = (file: string, options: babel.TransformOptions) => {
  return babel.transformFileAsync(file, options);
};

const renameFileExtension = (file: string) => {
  if (path.extname(file) === ".ts" || path.extname(file) === ".tsx") {
    return file.replace(/\.tsx?$/, ".js");
  }

  return file;
};

export default async function compileSource() {
  const files = await globby("**/*.{mts,ts,tsx}", {
    cwd: "src",
    ignore: COMPILE_IGNORE_PATTERNS,
  });

  const cjsOptions = babel.loadOptions();
  const esmOptions = babel.loadOptions({ envName: "esm" });

  const commonJs: ModuleItem = ["cjs", "lib", cjsOptions];
  const esModules: ModuleItem = ["esm", "es", esmOptions];

  for (const [name, dir, options] of [commonJs, esModules]) {
    if (options) {
      console.log(chalk.greenBright(`Compiling files for ${name}`));
      const spinner = ora(name).start();

      for (const file of files) {
        const result = await parseFile(path.join("src", file), options);

        await fs.outputFile(renameFileExtension(path.join(dir, file)), result?.code);
      }

      spinner.succeed(`${name} → ${dir}`);
    }
  }

  const spinner = ora("UMD").start();
  $.verbose = false;
  await $`webpack --mode=production`;
  $.verbose = true;
  spinner.succeed(`UMD → umd`);
}
