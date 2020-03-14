import React from 'react';
import { connect } from 'react-redux';
import { Container } from 'react-bootstrap';
import { resetGame } from '../../actions/game';
import { IMAGES } from '../../constants';

const ResetButtonPure = ({ resetGame, text }) => {
  return (
    <Container className="resetButton">
      <button type="submit" onClick={resetGame}>
        <img src={IMAGES["reset"]}></img>
        {text}
      </button>
    </Container>
  )
}

export const ResetButton = connect(
  state => ({}),
  {
    resetGame
  }
)(ResetButtonPure)
