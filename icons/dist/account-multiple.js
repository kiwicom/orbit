"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint-disable */


exports.default = AccountMultiple;

var _react = require("react");

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function AccountMultiple(props) {
  return React.createElement(
    "svg",
    _extends({ viewBox: "0 0 32 32", xmlns: "http://www.w3.org/2000/svg", height: "24", fill: "#bac7d5" }, props),
    React.createElement("path", { d: "M21.4 16.4a2.99 2.99 0 0 0 2.988-3c0-1.656-1.332-3-2.988-3a3.001 3.001 0 0 0 0 6zm-9-1.2a3.585 3.585 0 0 0 3.588-3.6c0-1.992-1.596-3.6-3.588-3.6a3.595 3.595 0 0 0-3.6 3.6c0 1.992 1.608 3.6 3.6 3.6zm9 3.6c-2.196 0-6.6 1.104-6.6 3.3v2.7H28v-2.7c0-2.196-4.404-3.3-6.6-3.3zm-9-1.2c-2.796 0-8.4 1.404-8.4 4.2v3h8.4v-2.7c0-1.02.396-2.808 2.844-4.164-1.044-.216-2.052-.336-2.844-.336z" })
  );
}