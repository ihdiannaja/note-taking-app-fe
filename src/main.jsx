import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/700.css';

const theme = createTheme({
  typography: {
    fontFamily: "Poppins, Roboto, Arial, sans-serif"
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none"
        }
      }
    },
  }
})

createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <CssBaseline>
      <App/>
    </CssBaseline>
  </ThemeProvider>
)
