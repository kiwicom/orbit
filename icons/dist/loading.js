"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint-disable */


exports.default = Loading;

var _react = require("react");

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function Loading(props) {
  return React.createElement(
    "svg",
    _extends({ viewBox: "0 0 32 32", xmlns: "http://www.w3.org/2000/svg", height: "24", fill: "#bac7d5" }, props),
    React.createElement("path", { d: "M6.77 18.77a2.77 2.77 0 1 1 0-5.54 2.77 2.77 0 0 1 0 5.54zm0-9.232A2.77 2.77 0 1 1 6.77 4a2.77 2.77 0 0 1 0 5.538zm9.23 0A2.77 2.77 0 1 1 16 4a2.77 2.77 0 0 1 0 5.538zm0 9.231a2.77 2.77 0 1 1 0-5.538 2.77 2.77 0 0 1 0 5.538zm9.23-9.23a2.77 2.77 0 1 1 0-5.539 2.77 2.77 0 0 1 0 5.538zm0 9.23a2.77 2.77 0 1 1 0-5.538 2.77 2.77 0 0 1 0 5.538zM6.77 28a2.77 2.77 0 1 1 0-5.538 2.77 2.77 0 0 1 0 5.538zM16 28a2.77 2.77 0 1 1 0-5.538A2.77 2.77 0 0 1 16 28zm9.23 0a2.77 2.77 0 1 1 0-5.538 2.77 2.77 0 0 1 0 5.538z" })
  );
}