// import React, { useEffect, useState } from 'react';

import { IAnime } from '../App';

export const AnimeCard = (props: IAnime) => {
  return (
    <div key={props.i} className="flex rounded-lg border">
      <img src={props.image_url} alt="" className="w-40 rounded-lg" />
      <div>{props.title}</div>
      <div>{props.score}</div>
      <div>{props.episodes}</div>
      <div>{props.synopsis}</div>
    </div>
  );
};
