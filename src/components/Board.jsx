import React, { useState } from 'react';
import { connect } from 'react-redux';
import { makeMove } from '../actions';

const Card = ({ handleClick, id }) => {
  return(
    <button type="button" onClick={() => handleClick(id)}></button>
  )
}

const BoardPure = ({ board, makeMove }) => {
  const handleClick = (id) => {
    makeMove(id)
  }

  return(
    board.map((el, index) => 
      <Card 
        key={index}
        id={index}
        value={el.value}
        visible={el.visible} 
        matched={el.matched} 
        handleClick={handleClick}
      />
    )
  )
}

export const Board = connect(
  state => ({
    board: state.gameBoard
  }),
  dispatch => ({
    makeMove: (cardId) => dispatch(makeMove(cardId))
  })
)(BoardPure);
