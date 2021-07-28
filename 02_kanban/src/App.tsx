import React, { useState, useEffect } from 'react';
import './App.css';
import Board from './components/Board';

export interface IPokemon {
  name: string;
  url: string;
  // [index: number]: {
  //   name: string;
  //   url: string;
  // };
}

function App() {
  const [pokemon, setPokemon] = useState<Array<IPokemon>>([]);

  useEffect(() => {
    const fetch10Pokemon = () => {
      let promises = [];
      for (let i = 1; i <= 10; i++) {
        promises.push(fetch(`https://pokeapi.co/api/v2/pokemon/${i}`));
      }
      return Promise.all(promises);
    };

    const awaitJson = (responses: Response[]) => {
      return Promise.all(
        responses.map((response) => {
          if (response.ok) return response.json();
          throw new Error(response.statusText);
        })
      );
    };

    fetch10Pokemon()
      .then(awaitJson)
      .then((pokemonData: Array<any>) => {
        const mappedPokemonData = pokemonData.map((pd) => {
          return {
            name: pd.name,
            url: pd.sprites.front_default,
          };
        });
        setPokemon([...mappedPokemonData]);
      });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // useEffect(() => {
  //   console.log(pokemon);
  // }, [pokemon]);

  return (
    <div className="App">
      <header className="App-header">
        <Board pokemon={pokemon}></Board>
      </header>
    </div>
  );
}

export default App;
