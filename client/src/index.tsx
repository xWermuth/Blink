import React from "react";
import { render } from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import "./App.css";

import { Route, Switch } from "react-router";
import { Backdrop } from "./components/BackdropProvider/Backdrop";

// Components
import Main from "./pages/Main/Main";
import { Test } from "./pages/Test";
import { ProviderWrapper } from "./components/Provider/ProviderWrapper";
import initStore from "./store/store";

const store = initStore();

export const Root: React.FC = () => {
  return (
    <ProviderWrapper store={store}>
      <Backdrop />
      <Switch>
        <Route exact={true} path="/main" component={Main} />
        <Route exact={true} path="/" component={Test} />
      </Switch>
    </ProviderWrapper>
  );
};

render(<Root />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
