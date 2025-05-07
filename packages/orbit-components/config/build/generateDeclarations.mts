import { $, chalk } from "zx";

export default async function generateTypeDeclarations() {
  await $`node --loader ts-node/esm config/typeFiles.mts`;

  console.log(chalk.greenBright.bold("Copying type files..."));
  await $`cpy "**/types.ts" ../lib --cwd src --parents`;
  await $`cpy "**/types.ts" ../es --cwd src --parents`;

  console.log(chalk.greenBright.bold("Generating type declarations..."));
  await $`del tsconfig.tsbuildinfo`; // reset potential incremental compilation information
  await $`tsc --p tsconfig-build.json`;
  await $`tsc --p tsconfig-build.json --rootDir src --outDir es --declaration --emitDeclarationOnly --moduleResolution node`;

  // Clean up test-related declaration files
  console.log(chalk.greenBright.bold("Cleaning up test-related declaration files..."));
  await $`del "lib/**/*.ct-story.d.ts" "lib/**/*.ct-story.d.ts.map" "es/**/*.ct-story.d.ts" "es/**/*.ct-story.d.ts.map" "lib/**/*.ct.d.ts" "lib/**/*.ct.d.ts.map" "es/**/*.ct.d.ts" "es/**/*.ct.d.ts.map"`;
}
