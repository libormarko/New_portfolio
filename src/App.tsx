import React from 'react';
import NavBar from './Navbar/NavBar';
import Intro from './Intro/Intro';
import About from './About/About';
import { AppContainer } from './App.styles';

export const App: React.FC<any> = () => {
  return (
    <AppContainer>
      <NavBar />
      <Intro />
      <About />
    </AppContainer>
  );
};

export default App;
