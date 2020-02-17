import React, { useState } from 'react';
import { connect } from 'react-redux';

const Card = () => {
  return(
    <button type="button"></button>
  )
}

const BoardPure = () => {
  return(
    <Card />
  )
}

export const Board = connect(
  state => ({
    board: state.gameBoard
  }),
  dispatch => ({})
)(BoardPure);
