export default actionTypes =>
  Object.keys(actionTypes).reduce((accumulator, value) => ({
    ...accumulator,
    [value]: (arg = {}) => ({
      type: actionTypes[value],
      ...arg
    })
  }), {});