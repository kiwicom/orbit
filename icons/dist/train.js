"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint-disable */


exports.default = Train;

var _react = require("react");

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function Train(props) {
  return React.createElement(
    "svg",
    _extends({ viewBox: "0 0 32 32", xmlns: "http://www.w3.org/2000/svg", height: "24", fill: "#bac7d5" }, props),
    React.createElement("path", { d: "M22.8 14.8H8.4v-6h14.4v6zm-7.2 8.4a2.4 2.4 0 0 1-2.4-2.4c0-1.332 1.068-2.4 2.4-2.4a2.4 2.4 0 1 1 0 4.8zM6 21.4a4.2 4.2 0 0 0 4.2 4.2l-1.8 1.8v.6h14.4v-.6L21 25.6a4.2 4.2 0 0 0 4.2-4.2V8.8c0-4.2-4.296-4.8-9.6-4.8C10.296 4 6 4.6 6 8.8v12.6z" })
  );
}