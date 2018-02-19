"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint-disable */


exports.default = Money;

var _react = require("react");

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function Money(props) {
  return React.createElement(
    "svg",
    _extends({ viewBox: "0 0 32 32", xmlns: "http://www.w3.org/2000/svg", height: "24", fill: "#bac7d5" }, props),
    React.createElement("path", { d: "M16.307 14.533c-3.027-.786-4-1.6-4-2.866 0-1.454 1.346-2.467 3.6-2.467 2.373 0 3.253 1.133 3.333 2.8h2.947c-.094-2.293-1.494-4.4-4.28-5.08V4h-4v2.88c-2.587.56-4.667 2.24-4.667 4.813 0 3.08 2.547 4.614 6.267 5.507 3.333.8 4 1.973 4 3.213 0 .92-.654 2.387-3.6 2.387-2.747 0-3.827-1.227-3.974-2.8H9c.16 2.92 2.347 4.56 4.907 5.107V28h4v-2.867c2.6-.493 4.666-2 4.666-4.733 0-3.787-3.24-5.08-6.266-5.867z" })
  );
}