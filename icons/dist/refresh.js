"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint-disable */


exports.default = Refresh;

var _react = require("react");

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function Refresh(props) {
  return React.createElement(
    "svg",
    _extends({ viewBox: "0 0 32 32", xmlns: "http://www.w3.org/2000/svg", height: "24", fill: "#bac7d5" }, props),
    React.createElement("path", { d: "M23.636 11.364l-4.363 4.363h3.272A6.55 6.55 0 0 1 16 22.273a6.404 6.404 0 0 1-3.055-.764l-1.592 1.593A8.652 8.652 0 0 0 16 24.455a8.725 8.725 0 0 0 8.727-8.728H28l-4.364-4.363zM9.455 15.727A6.55 6.55 0 0 1 16 9.182c1.102 0 2.15.273 3.055.763l1.592-1.592A8.652 8.652 0 0 0 16 7a8.725 8.725 0 0 0-8.727 8.727H4l4.364 4.364 4.363-4.364H9.455z" })
  );
}