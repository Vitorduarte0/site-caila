import { createTheme } from "@mui/material/styles";
import { primary, secondary, quaternary } from "./color";

let theme = createTheme({
  palette: {
    primary: {
      main: primary
    },
    secondary: {
      main: secondary
    }
  }
});

theme = createTheme(theme, {
  palette: {
    inherit: {
      main: quaternary
    }
  }
});

export default theme;
