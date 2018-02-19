"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint-disable */


exports.default = Walk;

var _react = require("react");

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function Walk(props) {
  return React.createElement(
    "svg",
    _extends({ viewBox: "0 0 32 32", xmlns: "http://www.w3.org/2000/svg", height: "24", fill: "#bac7d5" }, props),
    React.createElement("path", { d: "M17.535 8.465c1.251 0 2.276-1.005 2.276-2.232C19.81 5.005 18.786 4 17.535 4c-1.252 0-2.276 1.005-2.276 2.233 0 1.227 1.024 2.232 2.276 2.232zm-4.21 3.795L10.137 28h2.39l2.048-8.93 2.39 2.232V28h2.276v-8.372l-2.39-2.233.683-3.348c1.479 1.674 3.755 2.79 6.258 2.79v-2.232c-2.162 0-3.982-1.117-4.893-2.68l-1.138-1.785c-.455-.67-1.138-1.117-1.934-1.117-.342 0-.57.112-.91.112L9 11.59v5.246h2.276v-3.795l2.048-.782z" })
  );
}