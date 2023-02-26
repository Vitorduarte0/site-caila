import Global from "../GlobalStyled"
import { Header } from "../components/Header";
import theme from "../constants/theme";
import { ThemeProvider } from '@mui/material/styles';

const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <Global />

      <Header />
    </ThemeProvider>
  )
}

export default App
