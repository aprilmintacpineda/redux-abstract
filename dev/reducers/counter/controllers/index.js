import {
  increaseCount,
  decreaseCount
} from './count';

import actionTypes from '../actionTypes';

export default {
  [actionTypes.increaseCount]: increaseCount,
  [actionTypes.decreaseCount]: decreaseCount
};