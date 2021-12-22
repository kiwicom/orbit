"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.gitlabApiCall = exports.request = void 0;
var axios_1 = __importDefault(require("axios"));
var dotenv_safe_1 = require("dotenv-safe");
var path_1 = __importDefault(require("path"));
var chalk_1 = __importDefault(require("chalk"));
var fs_extra_1 = __importDefault(require("fs-extra"));
var execa_1 = require("execa");
var helpers_1 = require("./helpers");
var consts_1 = require("./consts");
var queries_1 = __importDefault(require("./queries"));
dotenv_safe_1.config({
    allowEmptyValues: true,
    example: path_1.default.resolve(__dirname, "../.env.example"),
});
var request = function (query, vars) {
    return axios_1.default.post(consts_1.BASE_URL, { query: query, variables: vars }, {
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + process.env.GITLAB_TOKEN,
        },
    });
};
exports.request = request;
var gitlabApiCall = function (_a) {
    var ids = _a.ids, folder = _a.folder, outputPath = _a.outputPath, config = _a.config;
    return __awaiter(void 0, void 0, void 0, function () {
        var response, commands;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, exports.request(queries_1.default.projectsQuery, { ids: ids })];
                case 1:
                    response = (_b.sent()).data;
                    if (!response) return [3, 3];
                    commands = response.data.projects.nodes.map(function (_a) {
                        var id = _a.id, ssh = _a.sshUrlToRepo, url = _a.httpUrlToRepo, projectMembers = _a.projectMembers, description = _a.description, repository = _a.repository;
                        var projectId = id.replace(/^\D+/g, "");
                        var name = url.split("/").slice(-1)[0].replace(".git", "");
                        return {
                            cmd: "git clone -b master " + ssh + " --depth=1 --single-branch " + folder + "/" + name + "-" + projectId,
                            name: name,
                            url: url,
                            id: projectId,
                            description: description,
                            createdAt: new Date().toISOString(),
                            lastCommit: repository.tree.lastCommit,
                            members: helpers_1.filterMembers(projectMembers.nodes),
                        };
                    });
                    return [4, Promise.all(commands.map(function (_a) {
                            var id = _a.id, name = _a.name, cmd = _a.cmd, url = _a.url, data = __rest(_a, ["id", "name", "cmd", "url"]);
                            return execa_1.command(cmd)
                                .then(function () { return console.log(chalk_1.default.bold.blue("fetched: " + name)); })
                                .then(function () { return __awaiter(void 0, void 0, void 0, function () {
                                var projectId, projectFolder, orbitVersion;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            projectId = name + "-" + id;
                                            projectFolder = path_1.default.resolve(consts_1.TMP_FOLDER, projectId);
                                            return [4, helpers_1.getVersions(projectFolder)];
                                        case 1:
                                            orbitVersion = _a.sent();
                                            return [2, execa_1.command("yarn react-scanner-orbit -c " + (config || path_1.default.resolve(__dirname, "../", "dist", "react-scanner.config.js")) + " -p " + projectFolder, { env: { REPO_URL: url, OUTPUT_DIR: projectFolder } }).then(function (_a) {
                                                    var stdout = _a.stdout;
                                                    console.info(chalk_1.default.green.magenta("parsed: " + name));
                                                    return __assign(__assign({ name: name }, data), { url: url,
                                                        orbitVersion: orbitVersion, trackedData: JSON.parse(stdout.substring(stdout.indexOf("["))) });
                                                })];
                                    }
                                });
                            }); });
                        })).then(function (result) {
                            fs_extra_1.default.writeFile(helpers_1.getOutputPath(outputPath, helpers_1.timestamp()), JSON.stringify(result, null, 2), "utf8");
                            console.info(chalk_1.default.bold.magenta("Successfully created " + helpers_1.timestamp() + ".json file in the " + outputPath));
                        })];
                case 2:
                    _b.sent();
                    _b.label = 3;
                case 3: return [2, null];
            }
        });
    });
};
exports.gitlabApiCall = gitlabApiCall;
function fetcher(_a) {
    var scope = _a.scope, outputPath = _a.outputPath, config = _a.config;
    return __awaiter(this, void 0, void 0, function () {
        var ids, err_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, 3, 4]);
                    ids = scope.map(function (n) { return "gid://gitlab/Project/" + consts_1.PROJECTS[n]; });
                    return [4, exports.gitlabApiCall({ ids: ids, folder: consts_1.TMP_FOLDER, outputPath: outputPath, config: config })];
                case 1:
                    _b.sent();
                    return [3, 4];
                case 2:
                    err_1 = _b.sent();
                    console.error(chalk_1.default.redBright(err_1));
                    return [3, 4];
                case 3:
                    try {
                        if (path_1.default.resolve(consts_1.TMP_FOLDER)) {
                            fs_extra_1.default.rmSync(consts_1.TMP_FOLDER, { recursive: true });
                        }
                    }
                    catch (e) {
                        console.error("An error has occurred while removing the temp folder at " + consts_1.TMP_FOLDER + ". Please remove it manually. Error: " + e);
                    }
                    return [7];
                case 4: return [2];
            }
        });
    });
}
exports.default = fetcher;
