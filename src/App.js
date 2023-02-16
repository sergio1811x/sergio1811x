import './App.css';
import React, { Suspense, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { Loading } from './components/helpers/Loading';
import { ScrollToTop } from './components/helpers/ScrollToTop';
import { themeDark, themeLight } from './components/helpers/ChangeTheme';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Footer } from './components/Footer';

function App() {
  const [light, setLight] = useState(false); // set light/dark theme

  return (
    <div className="App">
      <ThemeProvider theme={light ? themeLight : themeDark}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header light={light} setLight={setLight} />
                <main>
                  <Home light={light} />
                </main>
              </>
            }
          />
        </Routes>
        <CssBaseline />
        <Suspense fallback={<Loading />}>
          <ScrollToTop />
          <Footer />
        </Suspense>
      </ThemeProvider>
    </div>
  );
}

export default App;
