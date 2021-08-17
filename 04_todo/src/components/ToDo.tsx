import React from 'react';
import { IToDo } from '../App';

function ToDo(props: IToDo) {
  return <div className="line-through">{props.text}</div>;
}

export default ToDo;
