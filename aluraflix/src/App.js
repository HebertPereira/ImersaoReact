import React from 'react';
import './App.css';
import { HashRouter } from 'react-router-dom';
import Navbar from './component/navbar.jsx';
import Router from './Router.js'

function App() {
  return (
    <HashRouter>
      <Navbar/>
      <Router/>
    </HashRouter>
  );
}

export default App;
