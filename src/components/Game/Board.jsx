import React from 'react';
import { connect } from 'react-redux';
import { Container } from 'react-bootstrap';
import { makeMove } from '../../actions/game';
import { Card } from './Card';

const BoardPure = ({ board, makeMove, disabled }) => {
  const handleClick = (id) => {
    !disabled && makeMove(id)
  }

  return(
    <Container className="board">
      {board.map((card, index) => 
        <Card 
          key={index}
          id={index}
          value={card.value}
          visible={card.visible}
          disabled={disabled}
          matched={card.matched} 
          handleClick={handleClick}
        />
      )}
    </Container>
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
