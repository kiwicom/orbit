"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint-disable */


exports.default = InformationOutline;

var _react = require("react");

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function InformationOutline(props) {
  return React.createElement(
    "svg",
    _extends({ viewBox: "0 0 32 32", xmlns: "http://www.w3.org/2000/svg", height: "24", fill: "#bac7d5" }, props),
    React.createElement("path", { d: "M14.8 12.4h2.4V10h-2.4v2.4zM16 25.6c-5.292 0-9.6-4.308-9.6-9.6s4.308-9.6 9.6-9.6 9.6 4.308 9.6 9.6-4.308 9.6-9.6 9.6zM16 4C9.373 4 4 9.373 4 16A12 12 0 1 0 16 4zm-1.2 18h2.4v-7.2h-2.4V22z" })
  );
}