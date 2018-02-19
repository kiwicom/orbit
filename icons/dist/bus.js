"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint-disable */


exports.default = Bus;

var _react = require("react");

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function Bus(props) {
  return React.createElement(
    "svg",
    _extends({ viewBox: "0 0 32 32", xmlns: "http://www.w3.org/2000/svg", height: "24", fill: "#bac7d5" }, props),
    React.createElement("path", { d: "M7.288 25.488v2.249c0 .695.58 1.263 1.287 1.263h1.288c.708 0 1.288-.568 1.288-1.263v-1.263h10.301v1.263c0 .695.58 1.263 1.288 1.263h1.288c.708 0 1.287-.568 1.287-1.263v-2.249c.786-.694 1.288-1.692 1.288-2.804V10.053C26.603 5.632 21.993 5 16.301 5 10.61 5 6 5.632 6 10.053v12.631c0 1.112.502 2.11 1.288 2.804zm1.287-3.435c0-1.049.863-1.895 1.932-1.895s1.931.846 1.931 1.895c0 1.048-.862 1.894-1.931 1.894s-1.932-.846-1.932-1.894zm11.59 0c0-1.049.862-1.895 1.931-1.895s1.932.846 1.932 1.895c0 1.048-.863 1.894-1.932 1.894s-1.931-.846-1.931-1.894zm-11.59-5.685v-6.315h15.453v6.315H8.575z" })
  );
}