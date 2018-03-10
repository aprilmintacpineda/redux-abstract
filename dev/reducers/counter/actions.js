import {
  mapActionTypesToActions,
  mapControllersToActions
} from '../../../build';

import controllers from './controllers';
import actionTypes from './actionTypes';

export const actions = mapActionTypesToActions(actionTypes);
export const stateControllers = mapControllersToActions(controllers, actionTypes);