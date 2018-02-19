"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint-disable */


exports.default = CalendarRange;

var _react = require("react");

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function CalendarRange(props) {
  return React.createElement(
    "svg",
    _extends({ viewBox: "0 0 32 32", xmlns: "http://www.w3.org/2000/svg", height: "24", fill: "#bac7d5" }, props),
    React.createElement("path", { d: "M12.2 14.8H9.8v2.4h2.4v-2.4zm4.8 0h-2.4v2.4H17v-2.4zm4.8 0h-2.4v2.4h2.4v-2.4zm2.4-8.4H23V4h-2.4v2.4H11V4H8.6v2.4H7.4a2.39 2.39 0 0 0-2.388 2.4L5 25.6A2.4 2.4 0 0 0 7.4 28h16.8c1.32 0 2.4-1.08 2.4-2.4V8.8c0-1.32-1.08-2.4-2.4-2.4zm0 19.2H7.4V12.4h16.8v13.2z" })
  );
}