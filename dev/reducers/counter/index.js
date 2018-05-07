import { baseReducer } from '../../../build';
import controllers from './controllers';
import initialState from './initialState';

export default (state = initialState, action) =>
  baseReducer(state, action, controllers);