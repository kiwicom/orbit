"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var consts_1 = require("./consts");
var orbitProcessor_1 = __importDefault(require("./orbitProcessor"));
module.exports = {
    crawlFrom: consts_1.TMP_FOLDER,
    includeSubComponents: true,
    deprecated: [],
    importedFrom: /@kiwicom\/orbit-components/g,
    exclude: [
        "node_modules",
        "__fixtures__",
        "test-utils",
        "mocks",
        "server",
        "flow-typed",
        "scripts",
        "codemodes",
        "cypress",
        "dist",
        "types",
    ],
    processors: [orbitProcessor_1.default],
};
