"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint-disable */


exports.default = Calendar;

var _react = require("react");

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function Calendar(props) {
  return React.createElement(
    "svg",
    _extends({ viewBox: "0 0 32 32", xmlns: "http://www.w3.org/2000/svg", height: "24", fill: "#bac7d5" }, props),
    React.createElement("path", { d: "M21.8 17.2h-6v6h6v-6zM20.6 4v2.4H11V4H8.6v2.4H7.4a2.39 2.39 0 0 0-2.388 2.4L5 25.6A2.4 2.4 0 0 0 7.4 28h16.8c1.32 0 2.4-1.08 2.4-2.4V8.8c0-1.32-1.08-2.4-2.4-2.4H23V4h-2.4zm3.6 21.6H7.4V12.4h16.8v13.2z" })
  );
}