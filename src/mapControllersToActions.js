export default (controllers, actionTypes) =>
  Object.keys(actionTypes).reduce((accumulator, value) => ({
    ...accumulator,
    [actionTypes[value]]: controllers[actionTypes[value]]
  }), {});