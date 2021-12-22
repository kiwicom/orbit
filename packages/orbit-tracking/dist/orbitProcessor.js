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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var helpers_1 = require("./helpers");
var isIcon = function (instance) { return instance.importInfo.moduleName.includes("/icons"); };
exports.default = (function (_a) {
    var forEachComponent = _a.forEachComponent, deprecated = _a.deprecated, sortObjectKeysByValue = _a.sortObjectKeysByValue, output = _a.output;
    var result = {};
    forEachComponent(function (_a) {
        var name = _a.componentName, component = _a.component;
        var instances = component.instances;
        if (!instances)
            return;
        var _b = process.env, _c = _b.REPO_URL, REPO_URL = _c === void 0 ? "" : _c, _d = _b.OUTPUT_DIR, OUTPUT_DIR = _d === void 0 ? "" : _d;
        result[name] = {
            instances: instances.length,
            sources: instances.map(function (instance) {
                return path_1.default.join(REPO_URL.replace(/\.git$/, ""), "-/blob/master", path_1.default.relative(OUTPUT_DIR, instance.location.file) + "#L" + instance.location.start.line);
            }),
            props: {},
            category: helpers_1.getCategory(name),
            isDeprecated: false,
            icon: false,
        };
        for (var _i = 0, instances_1 = instances; _i < instances_1.length; _i++) {
            var instance = instances_1[_i];
            var imported = instance.importInfo.imported;
            if (deprecated.includes(imported)) {
                result[name].isDeprecated = true;
            }
            if (isIcon(instance)) {
                result[name].icon = true;
                result[name].category = "icons";
            }
            for (var prop in instance.props) {
                var propValue = instance.props[prop];
                if (result[name].props[prop] === undefined) {
                    result[name].props[prop] = {
                        used: 0,
                        values: {},
                    };
                }
                if (result[name].props[prop].used === undefined) {
                    result[name].props[prop].used = 0;
                }
                else {
                    result[name].props[prop].used += 1;
                }
                if (result[name].props[prop].values[propValue] === undefined) {
                    result[name].props[prop].values[propValue] = {
                        value: propValue,
                        used: 1,
                    };
                }
                else {
                    result[name].props[prop].values[propValue].used += 1;
                }
                result[name].props = sortObjectKeysByValue(result[name].props, function (property) { return property.used; });
                result[name].props[prop].values = sortObjectKeysByValue(result[name].props[prop].values, function (value) { return value.used; });
            }
        }
    });
    result = sortObjectKeysByValue(result, function (component) { return component.instances; });
    var outputData = [];
    for (var _i = 0, _b = Object.entries(result); _i < _b.length; _i++) {
        var _c = _b[_i], name_1 = _c[0], value = _c[1];
        var properties = [];
        for (var _d = 0, _e = Object.entries(value.props); _d < _e.length; _d++) {
            var _f = _e[_d], key = _f[0], used = _f[1];
            var values = [];
            for (var _g = 0, _h = Object.entries(used.values); _g < _h.length; _g++) {
                var _j = _h[_g], propName = _j[0], propValue = _j[1];
                values.push({ name: propName, used: propValue.used });
            }
            properties.push(__assign(__assign({ name: key }, used), { values: values }));
        }
        outputData.push(__assign(__assign({ name: name_1 }, value), { props: properties }));
    }
    output(JSON.stringify(outputData));
    return outputData;
});
