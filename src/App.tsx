import React from 'react';
import NavBar from './Navbar/NavBar';
import { AppContainer } from './App.styles';

export const App: React.FC<any> = () => {
  return (
    <AppContainer>
      <NavBar />
    </AppContainer>
  );
};

export default App;
