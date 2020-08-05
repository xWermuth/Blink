import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import createRootReducer, { AppState } from "./rootReducer";
import { rootSaga } from "./rootSaga";

const sagaMiddleware = createSagaMiddleware({
  onError: (err) => console.log({ err }),
});

const composeEnhancers = composeWithDevTools({});

const initStore = (intitialState?: AppState) => {
  const store = createStore(
    createRootReducer(),
    intitialState || {},
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );

  sagaMiddleware.run(rootSaga);

  return store;
};

export default initStore;
