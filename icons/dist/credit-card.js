"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint-disable */


exports.default = CreditCard;

var _react = require("react");

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function CreditCard(props) {
  return React.createElement(
    "svg",
    _extends({ viewBox: "0 0 32 32", xmlns: "http://www.w3.org/2000/svg", height: "24", fill: "#bac7d5" }, props),
    React.createElement("path", { d: "M25.6 7H6.4a2.37 2.37 0 0 0-2.388 2.375L4 23.625A2.38 2.38 0 0 0 6.4 26h19.2a2.38 2.38 0 0 0 2.4-2.375V9.375A2.38 2.38 0 0 0 25.6 7zm0 16.625H6.4V16.5h19.2v7.125zm0-11.875H6.4V9.375h19.2v2.375z" })
  );
}