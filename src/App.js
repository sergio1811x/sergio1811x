import React, { Suspense, useState } from 'react';
import './styles/index.scss';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { Loading } from './components/helpers/Loading';
import { ScrollToTop } from './components/helpers/ScrollToTop';
import { themeDark, themeLight } from './components/helpers/ChangeTheme';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Footer } from './components/Footer';
import { PortfolioBlock } from './components/Portfolio';
import { SkillsBlock } from './components/Skills';

function App() {
  const [light, setLight] = useState(JSON.parse(localStorage.getItem('light'))); // set light/dark theme

  if (!light) {
    localStorage.setItem('light', JSON.stringify(false));
  } else localStorage.setItem('light', JSON.stringify(true));

  return (
    <div>
      <ThemeProvider theme={light ? themeLight : themeDark}>
        <Header light={light} setLight={setLight} />
        <Home light={light} />
        <PortfolioBlock light={light} />
        <SkillsBlock />
        <Footer />
        <CssBaseline />
        <Suspense fallback={<Loading />}>
          <ScrollToTop />
        </Suspense>
      </ThemeProvider>
    </div>
  );
}

export default App;
