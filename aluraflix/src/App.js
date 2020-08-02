import React from 'react';
import { HashRouter } from 'react-router-dom';
import BannerMain from './component/BannerMain/index.js';
import Navbar from './component/navbar/navbar.jsx';
import Router from './Router.js'

function App() {
  return (
    <>
      <Navbar/>
      <>
        <BannerMain/>
      </>
    </>
  );
}

export default App;
