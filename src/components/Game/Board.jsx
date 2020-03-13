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

    const dividedBoard = 
      cards.length % 4 === 0 ? 
      chunkify(cards, 4) : 
      chunkify(cards, cards.length / 2)

    return dividedBoard.map((row, index) => 
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
