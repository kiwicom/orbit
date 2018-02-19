"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint-disable */


exports.default = VerifiedNot;

var _react = require("react");

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function VerifiedNot(props) {
  return React.createElement(
    "svg",
    _extends({ viewBox: "0 0 32 32", xmlns: "http://www.w3.org/2000/svg", height: "24", fill: "#bac7d5" }, props),
    React.createElement("path", { d: "M8.123 7.5l.044-.019 14.827 14.827c-.01.012-.018.025-.027.037l2.532 2.532-1.288 1.288-2.405-2.406c-1.58 1.677-3.576 2.917-5.806 3.461-5.446-1.33-9.5-6.808-9.5-12.665V8.454l-2.11-2.11 1.288-1.289 2.445 2.446zM9.95 6.69L16 4l9.5 4.222v6.333c0 2.167-.556 4.282-1.53 6.154L9.95 6.689z" })
  );
}