import React from 'react';
import { Form } from 'react-bootstrap';
import { ResetButton } from './GameResetButton';


export const GameSummary = () => {
  return (
    <Form className="form">
      <Form.Label>
        Congratulations!
      </Form.Label>
      <Form.Label>
        You found all matches.
      </Form.Label>
      <ResetButton text='New game'/>
    </Form>
  )
}
