"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint-disable */


exports.default = CalendarQuestion;

var _react = require("react");

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function CalendarQuestion(props) {
  return React.createElement(
    "svg",
    _extends({ viewBox: "0 0 32 32", xmlns: "http://www.w3.org/2000/svg", height: "24", fill: "#bac7d5" }, props),
    React.createElement("path", { d: "M8.6 4v2.4H7.4A2.4 2.4 0 0 0 5 8.8v16.8A2.4 2.4 0 0 0 7.4 28h16.8a2.4 2.4 0 0 0 2.4-2.4V8.8a2.4 2.4 0 0 0-2.4-2.4H23V4h-2.4v2.4H11V4H8.6zm-1.2 8.4h16.8v13.2H7.4V12.4zm8.628 1.2c-1.044 0-1.884.24-2.532.708-.624.492-.936 1.176-.924 2.124l.012.036H14.9c.012-.36.12-.636.336-.828a1.2 1.2 0 0 1 .792-.276c.372 0 .684.12.9.336.216.228.312.54.312.9 0 .384-.084.708-.276.984-.168.276-.42.516-.732.708-.612.408-1.032.768-1.26 1.092-.24.312-.372.816-.372 1.416H17c0-.372.048-.672.156-.888.108-.216.312-.432.612-.624.54-.288.984-.636 1.332-1.116.348-.48.528-.972.528-1.572 0-.912-.324-1.644-.972-2.184-.636-.54-1.512-.816-2.628-.816zM14.6 22v2.4H17V22h-2.4z" })
  );
}