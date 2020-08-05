import { createAction, action, createAsyncAction } from "typesafe-actions";
import testConstants from "./test.constants";

const { INCREMENT, DECREMENT, DEFAULT } = testConstants;

export const increment = createAction(INCREMENT)<void>();

export const decrement = createAction(DECREMENT)();
