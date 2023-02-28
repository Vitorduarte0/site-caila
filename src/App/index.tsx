import Global from "../GlobalStyled"
import theme from "../constants/theme";
import { ThemeProvider } from '@mui/material/styles';
import { AppRouter } from "../router/AppRouter";

const App = () => {
  const handleSubmit = () => {
    console.log('clicou')
  }

  return (
    <ThemeProvider theme={theme}>
      <Global />
      <AppRouter />
    </ThemeProvider>
  )
}

export default App
