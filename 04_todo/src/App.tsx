import React, { useState } from 'react';
import AppWithReactHooks from './AppWithReactHooks';
import './App.css';

export interface IToDo {
  id: number;
  text: string;
  completed: boolean;
}

function App() {
  const [counter, setCounter] = useState(0);
  console.log(counter, setCounter);
  // NOTE: Check how app is done with hooks
  // return <AppWithReactHooks></AppWithReactHooks>;
  return (
    <div className="App ">
      <header className="App-header">
        <div>{counter}</div>
      </header>
    </div>
  );
}

export default App;
