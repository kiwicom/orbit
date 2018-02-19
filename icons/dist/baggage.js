"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint-disable */


exports.default = Baggage;

var _react = require("react");

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function Baggage(props) {
  return React.createElement(
    "svg",
    _extends({ viewBox: "0 0 32 32", xmlns: "http://www.w3.org/2000/svg", height: "24", fill: "#bac7d5" }, props),
    React.createElement("path", { d: "M20.696 11.304h-4.27a2.001 2.001 0 0 0-1.991 2v1.34H4V10.47c0-1.043.836-1.879 1.878-1.879h2.818V5.878C8.696 4.836 9.53 4 10.574 4h3.548C15.164 4 16 4.836 16 5.878v2.713h2.817c1.043 0 1.879.836 1.879 1.879v.834zM10.26 26.226H9.217v.72a1.043 1.043 0 1 1-2.087 0v-.72H5.878A1.872 1.872 0 0 1 4 24.348V16.73h6.82a2.991 2.991 0 0 0-.56 1.748v7.748zm.313-20.348v2.713h3.548V5.878h-3.548zm13.252 10.644h2.087A2.08 2.08 0 0 1 28 18.609v7.304A2.08 2.08 0 0 1 25.913 28H13.391a2.08 2.08 0 0 1-2.087-2.087l.01-7.304a2.07 2.07 0 0 1 2.077-2.087h2.087v-2.087a2.08 2.08 0 0 1 2.087-2.087h4.174a2.08 2.08 0 0 1 2.087 2.087v2.087zm-6.26 0h4.173v-2.087h-4.174v2.087z" })
  );
}