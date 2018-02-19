"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint-disable */


exports.default = AirplaneTakeoff;

var _react = require("react");

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function AirplaneTakeoff(props) {
  return React.createElement(
    "svg",
    _extends({ viewBox: "0 0 32 32", xmlns: "http://www.w3.org/2000/svg", height: "24", fill: "#bac7d5" }, props),
    React.createElement("path", { d: "M4.781 25.63h22.485v2.367H4.781V25.63zm23.16-11.077a1.771 1.771 0 0 0-2.178-1.254l-6.284 1.68-8.165-7.609-2.284.604 4.899 8.485-5.882 1.574-2.331-1.823L4 16.672l2.154 3.74.911 1.573 1.894-.508 6.284-1.68 5.148-1.374 6.284-1.68a1.801 1.801 0 0 0 1.266-2.19z" })
  );
}