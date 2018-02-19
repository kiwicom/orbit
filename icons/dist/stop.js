"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint-disable */


exports.default = Stop;

var _react = require("react");

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function Stop(props) {
  return React.createElement(
    "svg",
    _extends({ viewBox: "0 0 32 32", xmlns: "http://www.w3.org/2000/svg", height: "24", fill: "#bac7d5" }, props),
    React.createElement("path", { d: "M26 9.5V24c0 2.2-1.8 4-4 4h-7.3c-1.08 0-2.1-.43-2.85-1.19L4 18.83s1.26-1.23 1.3-1.25c.22-.19.49-.29.79-.29.22 0 .42.06.6.16.04.01 4.31 2.46 4.31 2.46V8c0-.83.67-1.5 1.5-1.5S14 7.17 14 8v7h1V5.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V15h1V6.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V15h1V9.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5z" })
  );
}