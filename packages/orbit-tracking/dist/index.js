"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chalk_1 = __importDefault(require("chalk"));
var sade_1 = __importDefault(require("sade"));
var dotenv_safe_1 = require("dotenv-safe");
var path_1 = __importDefault(require("path"));
var fs_extra_1 = __importDefault(require("fs-extra"));
var helpers_1 = require("./helpers");
var consts_1 = require("./consts");
var fetcher_1 = __importDefault(require("./fetcher"));
var packageJson = fs_extra_1.default.readJsonSync(process.cwd() + "/package.json");
dotenv_safe_1.config({
    allowEmptyValues: true,
    example: path_1.default.resolve(__dirname, "../.env.example"),
});
sade_1.default("orbit-tracking", true)
    .version(packageJson.version)
    .describe(packageJson.description)
    .option("-s, --scope", "Repositories to fetch from")
    .example("-s frontend account smart-faq search")
    .option("-o, --output", "Output path for parsed files")
    .example("-o path/to/folder")
    .option("-c --config", "Path to react-scanner config")
    .example("-c path/to/scanner.config.js")
    .action(function (_a) {
    var output = _a.output, config = _a.config, scope = _a.scope;
    var idx = process.argv.indexOf("-o") || process.argv.indexOf("--output");
    var passedScope = process.argv.slice(3, idx === 0 ? idx : process.argv.length);
    if (!process.env.GITLAB_TOKEN) {
        console.error("Gitlab api token is missing");
        process.exit(1);
    }
    if (config && !fs_extra_1.default.existsSync(config)) {
        console.error("Could not find config file");
        process.exit(1);
    }
    if (output && !fs_extra_1.default.existsSync(output)) {
        console.log("Path does not exists");
        process.exit(1);
    }
    if (scope) {
        if (consts_1.SCOPE.some(function (v) { return passedScope.includes(v); })) {
            fetcher_1.default({ scope: passedScope, outputPath: output, config: config });
            console.log(chalk_1.default.greenBright.bold(helpers_1.headingTemplate("Start fetching: " + passedScope.join(" / "))));
        }
        else {
            console.error("ERR: This project is not in the scope");
            process.exit(1);
        }
    }
    else {
        fetcher_1.default({ scope: consts_1.SCOPE, outputPath: output, config: config });
        console.log(chalk_1.default.white.bold.bgMagenta("Start fetching from default scope"));
    }
})
    .parse(process.argv);
