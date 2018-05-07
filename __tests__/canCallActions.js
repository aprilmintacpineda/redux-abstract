import counterReducer from '../dev/reducers/counter';
import initialState from '../dev/reducers/counter/initialState';
import actions from '../dev/reducers/counter/actions';
import actionTypes from '../dev/reducers/counter/actionTypes';

describe('testing reducer', () => {
  it('calls the right controller and passes argument to action', () => {
    expect(actions.increaseCount({
      value: 10
    }))
    .toEqual({
      type: actionTypes.increaseCount,
      value: 10
    });

    expect(actions.decreaseCount({
      value: 10
    }))
    .toEqual({
      type: actionTypes.decreaseCount,
      value: 10
    });

    expect(counterReducer(
      initialState,
      actions.increaseCount({
        value: 10
      })
    ))
    .toEqual({
      ...initialState,
      count: 11
    });

    expect(counterReducer(
      {
        ...initialState,
        count: 10
      },
      actions.decreaseCount({
        value: 5
      })
    ))
    .toEqual({
      ...initialState,
      count: 5
    });
  });
});