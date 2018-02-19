"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint-disable */


exports.default = Bell;

var _react = require("react");

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function Bell(props) {
  return React.createElement(
    "svg",
    _extends({ viewBox: "0 0 32 32", xmlns: "http://www.w3.org/2000/svg", height: "24", fill: "#bac7d5" }, props),
    React.createElement("path", { d: "M15.846 28a2.469 2.469 0 0 0 2.462-2.462h-4.923A2.46 2.46 0 0 0 15.846 28zm7.385-7.385v-6.153c0-3.779-2.019-6.942-5.539-7.779v-.837A1.844 1.844 0 0 0 15.846 4 1.844 1.844 0 0 0 14 5.846v.837c-3.532.837-5.538 3.988-5.538 7.779v6.153L6 23.077v1.23h19.692v-1.23l-2.461-2.462z" })
  );
}