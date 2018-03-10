'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapControllersToActions = exports.mapActionTypesToActions = exports.baseReducer = undefined;

var _baseReducer2 = require('./baseReducer');

var _baseReducer3 = _interopRequireDefault(_baseReducer2);

var _mapActionTypesToActions2 = require('./mapActionTypesToActions');

var _mapActionTypesToActions3 = _interopRequireDefault(_mapActionTypesToActions2);

var _mapControllersToActions2 = require('./mapControllersToActions');

var _mapControllersToActions3 = _interopRequireDefault(_mapControllersToActions2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.baseReducer = _baseReducer3.default;
exports.mapActionTypesToActions = _mapActionTypesToActions3.default;
exports.mapControllersToActions = _mapControllersToActions3.default;