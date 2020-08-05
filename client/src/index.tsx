import React from "react";
import ReactDOM, { render } from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import logo from "./logo.svg";
import "./App.css";

// Components
import Main from "./pages/Main/Main";
// import ProviderWrapper from "./components/Provider/ProviderWrapper";

export const Root: React.FC = () => {
  return (
    <React.StrictMode>
      {/* <ProviderWrapper> */}
      <Main />
    </React.StrictMode>
    // </ProviderWrapper>
  );
};

render(<Root />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
