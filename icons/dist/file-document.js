"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint-disable */


exports.default = FileDocument;

var _react = require("react");

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function FileDocument(props) {
  return React.createElement(
    "svg",
    _extends({ viewBox: "0 0 32 32", xmlns: "http://www.w3.org/2000/svg", height: "24", fill: "#bac7d5" }, props),
    React.createElement("path", { d: "M18 4H8.4a2.397 2.397 0 0 0-2.388 2.4L6 25.6C6 26.92 7.068 28 8.388 28H22.8c1.32 0 2.4-1.08 2.4-2.4V11.2L18 4zm2.4 19.2h-9.6v-2.4h9.6v2.4zm0-4.8h-9.6V16h9.6v2.4zm-3.6-6V5.8l6.6 6.6h-6.6z" })
  );
}