import actionTypes from '../actionTypes';
import { increaseCount, decreaseCount } from './count';

export default {
  [actionTypes.increaseCount]: increaseCount,
  [actionTypes.decreaseCount]: decreaseCount
};