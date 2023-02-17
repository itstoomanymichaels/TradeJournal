import { Routes, Route } from 'react-router-dom';
import { ColorModeContext, themeSettings, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import LoginForm from './Components/Login/LoginForm/LoginForm';
import Topbar from './Scenes/Global/Topbar';
import { useState } from 'react';
//import "./App.css";
//import Sidebar from '../Scenes/Global/Sidebar';
//import Dashboard from '../Scenes/Dashboard';
//import Dashboard from '../Scenes/Dashboard';
//import Dashboard from '../Scenes/Dashboard';
//import Dashboard from '../Scenes/Dashboard';
//import Dashboard from '../Scenes/Dashboard';
//import Dashboard from '../Scenes/Dashboard';
//import Dashboard from '../Scenes/Dashboard';
//import Dashboard from '../Scenes/Dashboard';

function App() {
  const [theme, colorMode] = useMode();
  const [loggedIn, setLoggedIn] = useState(false);

  const onLogIn = () => {
    setLoggedIn((prev) => !prev);
  };

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <div className='app'>
          {!loggedIn && <LoginForm loggedIn={loggedIn} onLogIn={onLogIn}/>}
            <main className={loggedIn ? 'content': 'hiddenContent'}>
              {loggedIn && <Topbar />}
              <Routes>
                <Route path="topbar" element={<Topbar />} />
              </Routes>
            </main>
        </div>
      </ThemeProvider>
  </ColorModeContext.Provider>)
}

export default App;
