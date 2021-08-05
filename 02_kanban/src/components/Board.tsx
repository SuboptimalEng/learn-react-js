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
        promises.push(
          fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`)
        );
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
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    const sourcePokemon: IPokemon = pokemon.find(
      (pokemon) => pokemon.name === draggableId
    ) as IPokemon;
    const updatedPokemon: IPokemon[] = Array.from(pokemon);
    updatedPokemon.splice(source.index, 1);
    updatedPokemon.splice(destination.index, 0, sourcePokemon);
    setPokemon(updatedPokemon);
  };
  return (
    <DragDropContext onDragEnd={dragEnded}>
      <Droppable droppableId="first-column">
        {(droppableProvided) => (
          <div>
            <div
              ref={droppableProvided.innerRef}
              {...droppableProvided.droppableProps}
              className="flex flex-col space-y-4"
            >
              {pokemon.map((prop, i) => {
                return (
                  <Draggable draggableId={prop.name} index={i} key={prop.name}>
                    {(draggableProvided) => (
                      <div
                        ref={draggableProvided.innerRef}
                        {...draggableProvided.dragHandleProps}
                        {...draggableProvided.draggableProps}
                        className="border rounded p-2 flex place-items-center"
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
              {droppableProvided.placeholder}
            </div>
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}
