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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.timestamp = exports.getCategory = exports.getVersions = exports.getOutputPath = exports.filterMembers = exports.headingTemplate = void 0;
var path_1 = __importDefault(require("path"));
var fast_glob_1 = __importDefault(require("fast-glob"));
var fs_extra_1 = __importDefault(require("fs-extra"));
var consts_1 = require("./consts");
var headingTemplate = function (str) { return "\n  ++++++++++++++++ ++++++++++++++++\n  ++++++++++++++++ ++++++++++++++++\n\n  " + str + "\n\n  ++++++++++++++++ ++++++++++++++++\n  ++++++++++++++++ ++++++++++++++++\n"; };
exports.headingTemplate = headingTemplate;
var filterMembers = function (members) {
    return members.reduce(function (acc, cur) {
        var accessLevel = cur.accessLevel, user = cur.user, id = cur.id;
        var bot = user.bot, state = user.state;
        var avatar = user.avatarUrl.match(/uploads\/-\/system/) ? "" : user.avatarUrl;
        if (bot || state === "blocked" || state === "deactivated")
            return acc;
        if (accessLevel.stringValue === "OWNER")
            acc.owners.push(__assign({ id: id }, user));
        else
            acc.maintainers.push(__assign(__assign({}, user), { id: id, avatarUrl: avatar }));
        return acc;
    }, { owners: [], maintainers: [] });
};
exports.filterMembers = filterMembers;
var getOutputPath = function (p, name) {
    if (p)
        return path_1.default.resolve(p, "tracking-" + name + ".json");
    return path_1.default.resolve(process.cwd(), "tracking-" + name + ".json");
};
exports.getOutputPath = getOutputPath;
var getVersions = function (pathToFolder) { return __awaiter(void 0, void 0, void 0, function () {
    var lockFiles, version, _i, lockFiles_1, lock, data, ver;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, fast_glob_1.default(pathToFolder + "/**/@(yarn.lock|package-lock.json)")];
            case 1:
                lockFiles = _a.sent();
                version = "";
                _i = 0, lockFiles_1 = lockFiles;
                _a.label = 2;
            case 2:
                if (!(_i < lockFiles_1.length)) return [3, 5];
                lock = lockFiles_1[_i];
                return [4, fs_extra_1.default.readFile(lock, "utf-8")];
            case 3:
                data = _a.sent();
                ver = data.match(/https:\/\/registry.yarnpkg.com\/@kiwicom\/orbit-components\/-\/orbit-components-[~^]?([\dvx*]+(?:[-.](?:[\dx*]+|alpha|beta))*)/g);
                if (ver)
                    version = ver[0].split("-").slice(-1)[0];
                _a.label = 4;
            case 4:
                _i++;
                return [3, 2];
            case 5: return [2, version];
        }
    });
}); };
exports.getVersions = getVersions;
var getCategory = function (name) {
    for (var _i = 0, _a = Object.entries(consts_1.CATEGORIES); _i < _a.length; _i++) {
        var _b = _a[_i], cat = _b[0], components = _b[1];
        if (components.includes(name)) {
            return cat.toLowerCase();
        }
    }
    return "unknown";
};
exports.getCategory = getCategory;
var timestamp = function () {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    return date + "-" + month + "-" + year;
};
exports.timestamp = timestamp;
