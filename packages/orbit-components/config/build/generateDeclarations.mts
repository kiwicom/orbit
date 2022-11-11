import { $, chalk, fs, globby } from "zx";
import flowgen, { beautify } from "flowgen";
import filedirname from "filedirname";
import dedent from "dedent";

const [, __dirname] = filedirname();

export default async function generateTypeDeclarations() {
  await $`ts-node --esm config/typeFiles.mts`;

  console.log(chalk.greenBright.bold("Generating type declarations..."));
  await $`cpy "**/*.js.flow" ../lib --cwd src --parents`;
  await $`cpy "**/*.js.flow" ../es --cwd src --parents`;
  await $`del tsconfig.tsbuildinfo`; // reset potential incremental compilation information
  await $`tsc`;
  await $`tsc --rootDir src --outDir es --declaration --emitDeclarationOnly --moduleResolution node`;

  console.log(chalk.greenBright.bold("Generating flow declarations..."));
  const tsDeclarations = await globby("{lib,es}/*.d.ts");
  await Promise.all(
    tsDeclarations.map(async declaration => {
      const flowDeclPath = declaration.replace(".d.ts", ".js.flow");
      try {
        if (await fs.pathExists(flowDeclPath)) return;
        const flowDecl = beautify(
          flowgen.compiler.compileDefinitionFile(declaration, {
            interfaceRecords: true,
          }),
        );
        const content = ["// @flow", flowDecl].join("\n");
        await fs.writeFile(flowDeclPath, content);
      } catch (err) {
        if (err instanceof Error) {
          err.message = dedent`
              Failed to create a Flow libdef
              ${__dirname}/${flowDeclPath}
              ${err.message}
            `;
          throw err;
        }
      }
    }),
  );
}
