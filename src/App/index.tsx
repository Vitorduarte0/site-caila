import Global from "../GlobalStyled"
import { Header } from "../components/Header";
import theme from "../constants/theme";
import { ThemeProvider } from '@mui/material/styles';
import { CustomButton } from "../components/Button";

const App = () => {
  const handleSubmit = () => {
    console.log('clicou')
  }

  return (
    <ThemeProvider theme={theme}>
      <Global />

      <Header />

      <main>
        
      </main>
    </ThemeProvider>
  )
}

export default App
