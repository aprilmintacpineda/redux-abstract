import { baseReducer } from '../../../build';
import { stateControllers } from './actions';
import initialState from './initialState';

export default (state = initialState, action) =>
  baseReducer(state, action, stateControllers);