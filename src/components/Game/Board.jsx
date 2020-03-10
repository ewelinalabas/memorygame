import React from 'react';
import { connect } from 'react-redux';
import { makeMove } from '../../actions/game';
import { Card } from './Card';

const BoardPure = ({ board, makeMove, disabled }) => {
  const handleClick = (id) => {
    !disabled && makeMove(id)
  }

  return(
    board.map((card, index) => 
      <Card 
        key={index}
        id={index}
        value={card.value}
        visible={card.visible}
        disabled={disabled}
        matched={card.matched} 
        handleClick={handleClick}
      />
    )
  )
}

const twoVisibleCards = (board) => (
  board.filter(card => card.visible).length === 2
)

export const Board = connect(
  state => ({
    board: state.game.gameBoard,
    disabled: twoVisibleCards(state.game.gameBoard)
  }),
  {
    makeMove
  }
)(BoardPure);
