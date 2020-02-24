import React from 'react';
import { connect } from 'react-redux';
import { resetGame } from '../actions';

const ResetButtonPure = ({ resetGame, text }) => {
  return (
      <button type="submit" onClick={resetGame}>{text}</button>
  )
}

export const ResetButton = connect(
  state => ({}),
  dispatch => ({
    resetGame: () => dispatch(resetGame())
  })
)(ResetButtonPure)
