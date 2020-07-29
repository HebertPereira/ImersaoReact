import React from 'react';
import './App.css';
import { HashRouter, Router } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <Navbar/>
      <Router/>
    </HashRouter>
  );
}

export default App;
