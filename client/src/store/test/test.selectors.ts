import { AppState } from "../rootReducer";
import { createSelector } from "reselect";

const countState = (state: AppState) => state.count;

export const getCount = createSelector(countState, ({ count }) => count);
