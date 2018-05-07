'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/**
 * @param {any} state a reducer state
 * @param {Object} action a redux action
 * @param {Object} controllers the action handlers
 */
exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var controllers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  if (!state || !action || !controllers) console.error('Please ensure that you pass the right parameters. Refer to documentation to learn more. https://github.com/aprilmintacpineda/redux-abstract');

  if (controllers && !controllers[action.type]) {
    return _extends({}, state);
  }

  return _extends({}, controllers[action.type](state, action));
};