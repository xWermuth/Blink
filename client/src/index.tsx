import React from "react";
import { render } from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

import logo from "./logo.svg";
import "./App.css";

import { Provider } from "react-redux";
import initStore from "./store/store";
// import { Store } from "redux";

// Components
import Main from "./pages/Main/Main";
import { Test } from "./pages/Test";
// import ProviderWrapper from "./components/Provider/ProviderWrapper";

const store = initStore();

export const Root: React.FC = () => {
  return (
    <Provider store={store}>
      <React.StrictMode>
        {/* <ProviderWrapper> */}
        <div>
          <Test />
          <Main />
        </div>
      </React.StrictMode>
    </Provider>
    // </ProviderWrapper>
  );
};

render(<Root />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
