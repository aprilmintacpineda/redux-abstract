export const increaseCount = (state, action) => ({
  ...state,
  count: state.count + action.value
});

export const decreaseCount = (state, action) => ({
  ...state,
  count: state.count - action.value
});