import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { applyTheme } from './themes/utils';
import { baseTheme } from './themes/base';
import { darkTheme } from './themes/dark';

function App() {
  useEffect(() => {
    applyTheme(baseTheme);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div className="bg-secondary text-text-base">
          <div onClick={() => applyTheme(baseTheme)}>Base theme</div>
          <div onClick={() => applyTheme(darkTheme)}>Dark theme</div>
          <img src={logo} className="App-logo" alt="logo" />
          <div className="border p-2 ">Learn React</div>
        </div>
      </header>
    </div>
  );
}

export default App;
