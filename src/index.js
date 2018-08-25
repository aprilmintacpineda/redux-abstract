/**
 * @format
 * @param {any} state a reducer state
 * @param {Object} action a redux action
 * @param {Object} mutations the methods that handles the actions
 * @returns {Object} mutated state
 */

export function baseReducer (state = null, action = null, mutations = null) {
  if (!state || !action || !mutations)
    console.error(
      'Please ensure that you pass the right parameters. Refer to documentation to learn more. https://github.com/aprilmintacpineda/redux-abstract'
    );
  if (mutations && !mutations[action.type]) return { ...state };
  return { ...mutations[action.type](state, action) };
}

/**
 * @param {Object} actionTypes Object where the keys become the method you need to call to perform the action and the value of the key is the action type
 * @returns {Object} Object of actions
 */
export function mapActionTypesToActions (actionTypes) {
  return Object.keys(actionTypes).reduce(
    (accumulator, value) => ({
      ...accumulator,
      [value]: (arg = {}) => ({
        type: actionTypes[value],
        ...arg
      })
    }),
    {}
  );
}
