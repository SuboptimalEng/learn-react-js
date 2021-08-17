import React, { useState } from 'react';
import './App.css';

export interface IToDo {
  id: number;
  text: string;
  completed: boolean;
}

function App() {
  const [toDos, setToDos] = useState<Array<IToDo>>([
    {
      id: Math.floor(Math.random() * 1000),
      text: 'hi',
      completed: false,
    },
    {
      id: Math.floor(Math.random() * 1000),
      text: 'there',
      completed: true,
    },
    {
      id: Math.floor(Math.random() * 1000),
      text: 'hello',
      completed: true,
    },
    {
      id: Math.floor(Math.random() * 1000),
      text: 'world',
      completed: true,
    },
  ]);

  const toggleToDo = (toDoId: number) => {
    const i = toDos.findIndex((toDo) => toDo.id === toDoId);
    const newToDos = [...toDos];
    newToDos[i].completed = !newToDos[i].completed;
    setToDos(newToDos);
  };

  return (
    <div className="App ">
      <header className="App-header">
        <div className="text-6xl flex flex-col place-items-center space-y-4">
          <div>
            {toDos.map((toDo) => {
              return (
                <div key={toDo.id}>
                  <div className="flex space-x-8 items-end justify-between">
                    <div
                      className={
                        toDo.completed ? 'line-through text-gray-400' : ''
                      }
                    >
                      {toDo.text}
                    </div>

                    {toDo.completed ? (
                      <div
                        className="border mb-2 p-4 bg-green-500 rounded"
                        onClick={() => toggleToDo(toDo.id)}
                      ></div>
                    ) : (
                      <div
                        className="border mb-2 p-4 bg-white rounded"
                        onClick={() => toggleToDo(toDo.id)}
                      ></div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
