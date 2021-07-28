// import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import { IPokemon } from '../App';

export default function Board(props: { pokemon: Array<IPokemon> }) {
  console.log(props.pokemon);
  return (
    <div>
      {props.pokemon.map((prop, i) => {
        return <div key={i}>{prop.name}</div>;
      })}
    </div>
  );
}
