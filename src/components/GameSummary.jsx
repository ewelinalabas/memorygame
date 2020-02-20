import React from 'react';
import { connect } from 'react-redux';
import { resetGame } from '../actions';

const GameSummaryPure = ({ resetGame }) => {
  const handleClick = () => {resetGame()}

  return (
    <div>
      <p>Congratulations! You found all matches.</p>
      <button type="submit" onClick={handleClick}>Start a new game</button>
    </div>
  )
}

export const GameSummary = connect(
  state => ({}),
  dispatch => ({
    resetGame: () => dispatch(resetGame())
  })
)(GameSummaryPure)
