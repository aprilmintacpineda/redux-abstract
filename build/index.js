'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.baseReducer = baseReducer;
exports.mapActionTypesToActions = mapActionTypesToActions;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * @format
 * @param {any} state a reducer state
 * @param {Object} action a redux action
 * @param {Object} mutations the methods that handles the actions
 * @returns {Object} mutated state
 */

function baseReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var mutations = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  if (!state || !action || !mutations) console.error('Please ensure that you pass the right parameters. Refer to documentation to learn more. https://github.com/aprilmintacpineda/redux-abstract');
  if (mutations && !mutations[action.type]) return _extends({}, state);
  return _extends({}, mutations[action.type](state, action));
}

/**
 * @param {Object} actionTypes Object where the keys become the method you need to call to perform the action and the value of the key is the action type
 * @returns {Object} Object of actions
 */
function mapActionTypesToActions(actionTypes) {
  return Object.keys(actionTypes).reduce(function (accumulator, value) {
    return _extends({}, accumulator, _defineProperty({}, value, function () {
      var arg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return _extends({
        type: actionTypes[value]
      }, arg);
    }));
  }, {});
}