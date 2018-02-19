"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint-disable */


exports.default = ThumbDown;

var _react = require("react");

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function ThumbDown(props) {
  return React.createElement(
    "svg",
    _extends({ viewBox: "0 0 32 32", xmlns: "http://www.w3.org/2000/svg", height: "24", fill: "#bac7d5" }, props),
    React.createElement("path", { d: "M8.364 27.818v-13.09H4v13.09h4.364zm17.454-14.182h-6.883l1.036-4.985.033-.35c0-.446-.186-.861-.48-1.156L18.367 6l-7.178 7.19a2.133 2.133 0 0 0-.644 1.537v10.91c0 1.2.982 2.181 2.182 2.181h9.818c.906 0 1.68-.545 2.008-1.33l3.294-7.692c.098-.25.153-.512.153-.796v-2.182c0-1.2-.982-2.182-2.182-2.182z" })
  );
}