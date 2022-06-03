import sade from "sade";
import { config as dotEnvConfig } from "dotenv-safe";
import path from "path";
import fs from "fs-extra";

import { __dirname, errorMessage, infoMessage } from "./helpers";
import { SCOPE } from "./consts";
import fetcher from "./fetcher";
import { Scope } from "./interfaces";

const packageJson = fs.readJsonSync(`${process.cwd()}/package.json`);

dotEnvConfig({
  allowEmptyValues: true,
  example: path.resolve(__dirname, "../.env.example"),
});

export default async function cli(args) {
  sade("orbit-tracking", true)
    .version(packageJson.version)
    .describe(packageJson.description)
    .option("-s, --scope", "Repositories to fetch from")
    .example("-s frontend account smart-faq search")
    .option("-o, --output", "Output path for parsed files")
    .example("-o path/to/folder")
    .option("-c --config", "Path to react-scanner config")
    .example("-c path/to/scanner.config.js")
    .action(({ output, config, scope }) => {
      const idx = process.argv.indexOf("-o") || process.argv.indexOf("--output");
      const passedScope = process.argv.slice(3, idx === 0 ? idx : process.argv.length) as Scope[];

      if (!process.env.GITLAB_TOKEN) {
        errorMessage("Gitlab api token is missing");
        process.exit(1);
      }

      if (config && !fs.existsSync(config)) {
        errorMessage("Could not find config file");
        process.exit(1);
      }

      if (output && !fs.existsSync(output)) {
        errorMessage("Path does not exists");
        process.exit(1);
      }

      if (scope) {
        if (SCOPE.some(v => passedScope.includes(v))) {
          fetcher({ scope: passedScope, outputPath: output, config });
          infoMessage(`Start fetching: ${passedScope.join(" / ")}`);
        } else {
          errorMessage("ERR: This project is not in the scope");
          process.exit(1);
        }
      } else {
        fetcher({ scope: SCOPE, outputPath: output, config });
        infoMessage("Start fetching from default scope");
      }
    })
    .parse(args);
}

cli(process.argv);
