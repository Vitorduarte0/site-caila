import { createTheme } from "@mui/material/styles";
import { primary, secondary, tertiary } from "./color";

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
    info: {
      main: tertiary
    }
  }
});

export default theme;
