// import React, { useEffect, useState } from 'react';

import { IAnime } from '../App';

export const AnimeCard = (props: IAnime) => {
  let cardColor = 'bg-red-500';
  if (props.score >= 6.9) {
    cardColor = 'bg-yellow-400';
  }
  if (props.score >= 7.9) {
    cardColor = 'bg-green-500';
  }

  const cardClass = `flex rounded-lg p-4 ${cardColor} text-black`;

  return (
    <div key={props.i} className={cardClass}>
      <img src={props.image_url} alt="" className="w-40 rounded-lg" />
      <div className="p-4 w-full rounded-lg ">
        <div className="text-4xl font-bold h-full flex place-items-center text-left space-x-8 justify-between">
          <div className="w-64">{props.title}</div>
          <div className="border-2 border-black w-36 h-36 rounded-full flex place-items-center ">
            <div className="text-6xl text-center w-full">{Math.round(props.score * 10) / 10}</div>
          </div>
        </div>
        {/* <div>Episodes: {props.episodes}</div> */}
        {/* <div>Synopsis: {props.synopsis}</div> */}
      </div>
    </div>
  );
};
