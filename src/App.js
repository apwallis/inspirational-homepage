import React from 'react';
import logo from './logo.svg';
import { Image } from './features/image/Image.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Image />
    
      </header>
    </div>
  );
}

export default App;
