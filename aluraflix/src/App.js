import React from 'react';
import { HashRouter } from 'react-router-dom';
import Navbar from './component/navbar/navbar.jsx';
import Router from './Router.js'

function App() {
  return (
    <>
      <HashRouter>
        <Navbar/>
        <Router/>
      </HashRouter>
      <div>


      </div>

    </>
  );
}

export default App;
