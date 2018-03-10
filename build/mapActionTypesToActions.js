"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = function (actionTypes) {
  return Object.keys(actionTypes).reduce(function (accumulator, value) {
    return _extends({}, accumulator, _defineProperty({}, value, function () {
      var arg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return _extends({
        type: actionTypes[value]
      }, arg);
    }));
  }, {});
};