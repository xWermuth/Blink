import { all, takeEvery } from "redux-saga/effects";
import { increment, decrement } from "./test/test.actions";
import { incrementTestSaga, decrementTestSaga } from "./test/test.saga";

export function* rootSaga(): Generator {
  yield all([
    takeEvery(increment, incrementTestSaga),
    takeEvery(decrement, decrementTestSaga),
  ]);
}
