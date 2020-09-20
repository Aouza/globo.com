import React from 'react';

import Home from './pages/Home';
import HeaderComponent from './components/Header';

import CreateGlobalStyle from './Styles/style';

function App() {
  return (
    <>
      <HeaderComponent />
      <Home /> 
      <CreateGlobalStyle />
    </>
  );
}

export default App;
