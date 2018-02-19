"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint-disable */


exports.default = AirplaneLanding;

var _react = require("react");

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function AirplaneLanding(props) {
  return React.createElement(
    "svg",
    _extends({ viewBox: "0 0 32 32", xmlns: "http://www.w3.org/2000/svg", height: "24", fill: "#bac7d5" }, props),
    React.createElement("path", { d: "M5 25.579h23V28H5v-2.421zm8.692-6.936l5.265 1.404 6.428 1.719a1.827 1.827 0 0 0 2.228-1.283 1.827 1.827 0 0 0-1.284-2.228l-6.427-1.719L16.56 5.617 14.224 5v10.023l-6.016-1.61-1.126-2.808-1.755-.472v6.258l1.937.52 6.428 1.732z" })
  );
}