import React, { useState } from 'react';
import AppWithReactHooks from './AppWithReactHooks';
import './App.css';

export interface IToDo {
  id: number;
  text: string;
  completed: boolean;
}

function App() {
  // NOTE: Check how app is done with hooks
  // return <AppWithReactHooks></AppWithReactHooks>;
  const [counter, setCounter] = useState(0);
  return (
    <div className="App ">
      <header className="App-header">
        <div>{counter}</div>
      </header>
    </div>
  );
}

export default App;
