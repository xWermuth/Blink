// import { Teme } from "styled-system";
import { createMuiTheme } from "@material-ui/core/styles";
import { blue, red } from "@material-ui/core/colors";

export const createTheme = () => {
  return createMuiTheme({
    palette: {
      primary: blue,
      secondary: red,
    },
  });
};
