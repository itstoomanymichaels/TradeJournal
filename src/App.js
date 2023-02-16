import './App.css';
import LoginForm from './Components/Login/LoginForm/LoginForm';
import { ColorModeContext, themeSettings, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className='app'>
          <LoginForm />
          <main className='content'></main>
        </div>
      </ThemeProvider>
  </ColorModeContext.Provider>)
}

export default App;
