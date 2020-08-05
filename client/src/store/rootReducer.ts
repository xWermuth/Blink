import { combineReducers } from "redux";

import { CountState, testReducerIncrement } from "./test/test.reducer";

export interface AppState {
  count: CountState;
}

const createRootReducer = () =>
  combineReducers<AppState>({
    count: testReducerIncrement,
  });

export default createRootReducer;
