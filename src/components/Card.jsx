import React from 'react';

export const Card = ({ id, visible, value, handleClick}) => {
  const displayedValue = visible ? value : "" 
  return(
    <button 
      type="button" 
      className="card" 
      onClick={() => handleClick(id)}
    >
      {displayedValue}
    </button>
  )
}
