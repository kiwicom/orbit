"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint-disable */


exports.default = AirplaneOff;

var _react = require("react");

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function AirplaneOff(props) {
  return React.createElement(
    "svg",
    _extends({ viewBox: "0 0 32 32", xmlns: "http://www.w3.org/2000/svg", height: "24", fill: "#bac7d5" }, props),
    React.createElement("path", { d: "M5.383 8.13l6.29 6.304-7.553 4.724v2.526l10.105-3.158v6.948L11.7 27.368v1.895L16.12 28l4.421 1.263v-1.895l-2.526-1.894v-4.712L25.24 28l1.617-1.604-19.87-19.87-1.604 1.605zm12.632 4.712V5.895a1.895 1.895 0 1 0-3.79 0v4.648l9.878 9.878 4.017 1.263v-2.526l-10.105-6.316z" })
  );
}