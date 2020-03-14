import React from 'react';
import { connect } from 'react-redux';
import { Container } from 'react-bootstrap';
import { makeMove } from '../../actions/game';
import { Card } from './Card';
import { Row } from 'react-bootstrap';
import { chunkify } from '../../utils';

const BoardPure = ({ board, makeMove, disabled }) => {
  const handleClick = (id) => {
    !disabled && makeMove(id)
  }

  const divideBoard = (board) => {
    if(board.length % 5 === 0) {
      return chunkify(board, 5)
    } else if(board.length % 4 === 0) {
      return chunkify(board, 4)
    } else {
      return chunkify(board, board.length / 2)
    }
  } 

  const prepareBoard = (list) => {
    const cards = list.map((card, index) => 
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

    return divideBoard(cards).map((row, index) => 
      <Row key={index}>{row}</Row>
    )
  }

  return(
    <Container className="board">
      {prepareBoard(board)}
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
