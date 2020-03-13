import React from 'react';
import { Button } from 'react-bootstrap';

export const Card = ({ id, visible, matched, value, handleClick}) => {
  const displayedValue = visible ? value : "" 
  const className = matched ? "card matched" : "card"
  return(
    <Button 
      type="button"
      className={className} 
      onClick={() => handleClick(id)}
    >
      {displayedValue}
    </Button>
  )
}
