import React from "react";

import { Provider } from "react-redux";
import { Store } from "redux";
import { BackdropProvider } from "../BackdropProvider/BackDropProvider";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import { createTheme } from "../../styles/defaultTheme";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";

interface ProviderWrapper {
  store: Store;
}

export const ProviderWrapper: React.FC<ProviderWrapper> = ({
  children,
  store,
}) => (
  <React.StrictMode>
    <Provider store={store}>
      <BackdropProvider>
        <BrowserRouter basename="/client">
          <MuiThemeProvider theme={createTheme()}>
            <ThemeProvider theme={createTheme()}>{children}</ThemeProvider>
          </MuiThemeProvider>
        </BrowserRouter>
      </BackdropProvider>
    </Provider>
  </React.StrictMode>
);
