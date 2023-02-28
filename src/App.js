import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ColorModeContext, themeSettings, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import LoginForm from './Components/Login/LoginForm/LoginForm';
import Topbar from './Scenes/Global/Topbar';
import Sidebar from './Scenes/Global/Sidebar';
//import Dashboard from './Scenes/Dashboard';
//import Log from '../Scenes/Log';
//import P&L from '../Scenes/P&L';
//import Orders from '../Scenes/Orders';
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
          {loggedIn && <Sidebar />}
            <main className={loggedIn ? 'content': 'hiddenContent'}>
              <Topbar />
              <Routes>
                {/*<Route path="/" element={<Dashboard />} /> */}
              </Routes>
            </main>
        </div>
      </ThemeProvider>
  </ColorModeContext.Provider>)
}

export default App;
