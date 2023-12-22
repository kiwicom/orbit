import { $, chalk } from "zx";

export default async function generateTypeDeclarations() {
  await $`node --loader ts-node/esm config/typeFiles.mts`;

  console.log(chalk.greenBright.bold("Generating type declarations..."));
  await $`cpy "**/types.d.ts" ../lib --cwd src --parents`;
  await $`cpy "**/types.d.ts" ../es --cwd src --parents`;

  await $`del tsconfig.tsbuildinfo`; // reset potential incremental compilation information
  await $`tsc --p tsconfig-build.json`;
  await $`tsc --p tsconfig-build.json --rootDir src --outDir es --declaration --emitDeclarationOnly --moduleResolution node`;
}
