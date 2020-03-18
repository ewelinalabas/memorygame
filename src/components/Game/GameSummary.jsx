import React from 'react';
import { connect } from 'react-redux';
import { Form } from 'react-bootstrap';
import { ResetButton } from './GameResetButton';
import { resetGame } from '../../actions/game';


const GameSummaryPure = ({ resetGame }) => {
  return (
    <Form className="form">
      <Form.Label>
        Congratulations!
      </Form.Label>
      <Form.Label>
        You found all matches.
      </Form.Label>
      <ResetButton action={resetGame} text='New game'/>
    </Form>
  )
}

export const GameSummary = connect(
  state => ({}),
  {
    resetGame
  }
)(GameSummaryPure)
