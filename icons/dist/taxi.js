"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint-disable */


exports.default = Taxi;

var _react = require("react");

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function Taxi(props) {
  return React.createElement(
    "svg",
    _extends({ viewBox: "0 0 32 32", xmlns: "http://www.w3.org/2000/svg", height: "24", fill: "#bac7d5" }, props),
    React.createElement("path", { d: "M25.227 8.013a1.992 1.992 0 0 0-1.894-1.346H20V4h-8v2.667H8.667c-.88 0-1.614.56-1.894 1.346L4 16v10.667C4 27.4 4.6 28 5.333 28h1.334C7.4 28 8 27.4 8 26.667v-1.334h16v1.334C24 27.4 24.6 28 25.333 28h1.334C27.4 28 28 27.4 28 26.667V16l-2.773-7.987zm-16.56 13.32c-1.107 0-2-.893-2-2 0-1.106.893-2 2-2 1.106 0 2 .894 2 2 0 1.107-.894 2-2 2zm14.666 0c-1.106 0-2-.893-2-2 0-1.106.894-2 2-2 1.107 0 2 .894 2 2 0 1.107-.893 2-2 2zM6.667 14.667l2-6h14.666l2 6H6.667z" })
  );
}