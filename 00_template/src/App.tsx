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
        <div onClick={() => applyTheme(baseTheme)}>Base theme</div>
        <div color="secondary" onClick={() => applyTheme(darkTheme)}>
          Dark theme
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link text-4xl"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="text-text-base">Learn React</div>
        </a>
      </header>
    </div>
  );
}

export default App;
