import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

interface IPokemon {
  name: string;
  url: string;
}

export default function Board() {
  const [pokemon, setPokemon] = useState<Array<IPokemon>>([]);

  useEffect(() => {
    const fetch10Pokemon = () => {
      let promises = [];
      for (let i = 1; i <= 5; i++) {
        const pokemonNumber = Math.round(Math.random() * 150 + 1);
        promises.push(fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`));
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
        setPokemon(mappedPokemonData);
      });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const dragEnded = (result: any) => {
    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }

    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }

    const sourcePokemon: IPokemon = pokemon.find(
      (pokemon) => pokemon.name === draggableId
    ) as IPokemon;
    const updatedPokemon: IPokemon[] = Array.from(pokemon);
    updatedPokemon.splice(source.index, 1);
    updatedPokemon.splice(destination.index, 0, sourcePokemon);
    console.log({ updatedPokemon });
    setPokemon(updatedPokemon);
  };
  return (
    <DragDropContext onDragEnd={dragEnded}>
      <Droppable droppableId="first-column">
        {(a, droppableSnapshot) => (
          <div>
            <div
              ref={a.innerRef}
              {...a.droppableProps}
              className={`flex flex-col space-y-4 ${
                droppableSnapshot.isDraggingOver ? 'bg-red-800' : ''
              }`}
            >
              {pokemon.map((prop, i) => {
                return (
                  <Draggable draggableId={prop.name} index={i} key={prop.name}>
                    {(b, snapshot) => (
                      <div
                        className={`border rounded p-2 flex place-items-center  ${
                          snapshot.isDragging ? 'bg-green-500' : 'bg-blue-500'
                        }`}
                        {...b.dragHandleProps}
                        {...b.draggableProps}
                        ref={b.innerRef}
                      >
                        <div>
                          <img src={prop.url} alt="" className="w-32" />
                        </div>
                        <div>{prop.name}</div>
                      </div>
                    )}
                  </Draggable>
                );
              })}
              {a.placeholder}
            </div>
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}
