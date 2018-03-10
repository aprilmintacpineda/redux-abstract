/**
 * @param {any} state a reducer state
 * @param {Object} action a redux action
 * @param {Object} controllers the action handlers
 */
export default (state = null, action = null, controllers = null) => {
  if (!state || !action || !controllers) console.error(`Please ensure that you pass the right parameters. Refer to documentation to learn more. https://github.com/aprilmintacpineda/redux-abstract`);

  if (controllers && !controllers[action.type]) {
    console.warn(`You seem to have dispatched action type '${action.type}' with no corresponding controller!`);

    return {
      ...state
    };
  }
  
  return {
    ...controllers[action.type](state, action)
  };
};