import React from 'react';
import logo from './assets/logo-white.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Engineering Open House</h1>
        <h2>University of Illinois at Urbana-Champaign</h2>
        <h3>March 27 - 28, 2020</h3>
      </header>
    </div>
  );
}

export default App;
