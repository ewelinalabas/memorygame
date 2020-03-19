import React from 'react';
import { IMAGES } from '../../constants';

export const Card = ({ id, visible, matched, value, handleClick}) => {
  const className = matched ? "card matched" : "card";
  let image = null;

  if(!visible && !matched) {
    image = IMAGES['questionMark']
  } else if(visible && !matched) {
    image = IMAGES[value]
  } else if(matched) {
   image = IMAGES['transparent']
  };
 
  return(
    <div 
      className={className}
      onClick={() => handleClick(id)}
    >
      <img src={image}></img>
    </div>
  );
};
