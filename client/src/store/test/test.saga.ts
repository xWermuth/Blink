import { put, call, select } from "redux-saga/effects";
import { increment, decrement } from "./test.actions";

export function* incrementTestSaga(): Generator {
  console.log("---incrementcalled");
  call(increment);
}

export function* decrementTestSaga(): Generator {
  console.log("---decrementcalled");
  call(decrement);
}
