import { ActionType, createReducer, action } from "typesafe-actions";

import * as actions from "./test.actions";

import { increment, decrement } from "./test.actions";

export type TestAction = ActionType<typeof actions>;

export type CountState = Readonly<{
  count: number;
}>;

export const testInitialState: CountState = {
  count: 0,
};

export const testReducerIncrement = createReducer<CountState, TestAction>(
  testInitialState
)
  .handleAction(increment, (state) => {
    return {
      ...state,
      count: state.count + 10,
    };
  })
  .handleAction(decrement, (state) => {
    return {
      ...state,
      count: state.count - 10,
    };
  });
