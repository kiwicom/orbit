"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint-disable */


exports.default = Paperclip;

var _react = require("react");

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function Paperclip(props) {
  return React.createElement(
    "svg",
    _extends({ viewBox: "0 0 32 32", xmlns: "http://www.w3.org/2000/svg", height: "24", fill: "#bac7d5" }, props),
    React.createElement("path", { d: "M20.364 9.455V22a4.364 4.364 0 0 1-8.728 0V8.364a2.727 2.727 0 0 1 5.455 0v11.454a1.09 1.09 0 1 1-2.182 0V9.455h-1.636v10.363a2.727 2.727 0 1 0 5.454 0V8.364a4.364 4.364 0 1 0-8.727 0V22a6 6 0 1 0 12 0V9.455h-1.636z" })
  );
}