import React, { useState } from 'react';
import AppWithReactHooks from './AppWithReactHooks';

export interface IToDo {
  id: number;
  text: string;
  completed: boolean;
}

function App() {
  const [counter, setCounter] = useState(0);
  console.log(counter, setCounter);
  // NOTE: Check how app is done with hooks
  return <AppWithReactHooks></AppWithReactHooks>;
}

export default App;
