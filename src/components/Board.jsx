import React from 'react';
import { connect } from 'react-redux';
import { makeMove } from '../actions/game';
import { Card } from './Card';

const BoardPure = ({ board, makeMove }) => {
  const handleClick = (id) => {makeMove(id)}

  return(
    board.map((card, index) => 
      <Card 
        key={index}
        id={index}
        value={card.value}
        visible={card.visible} 
        matched={card.matched} 
        handleClick={handleClick}
      />
    )
  )
}

export const Board = connect(
  state => ({
    board: state.game.gameBoard
  }),
  {
    makeMove
  }
)(BoardPure);
