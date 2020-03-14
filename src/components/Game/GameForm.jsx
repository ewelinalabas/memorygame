import React, { useState } from 'react';
import { connect } from 'react-redux';
import { buildBoard } from '../../actions/game';
import { Form, Button } from 'react-bootstrap';
import { IMAGES } from '../../constants';

const GameFormPure = ({ buildBoard }) => {
  const MIN_NUMBER_OF_CARDS = 4
  const MAX_NUMBER_OF_CARDS = 20
  const ERROR_MESSAGE = `Please provide an even number from ${MIN_NUMBER_OF_CARDS} to ${MAX_NUMBER_OF_CARDS}`
  const [cardsNumber, setCardsNumber] = useState(MIN_NUMBER_OF_CARDS)

  const validateInput = (value) => {
    return (
      value >= MIN_NUMBER_OF_CARDS &&
      value <= MAX_NUMBER_OF_CARDS &&
      value % 2 === 0) 
  }

  const handleClick = () => {
    if(validateInput(cardsNumber)) {
      buildBoard(cardsNumber)
    }
  }

  return (
    <Form className="form">
      <Form.Label>How many cards would you like to play with?</Form.Label>
      <Form.Control 
        type="number" 
        min={MIN_NUMBER_OF_CARDS}
        max={MAX_NUMBER_OF_CARDS}
        step="2"
        value={cardsNumber} 
        onChange={(event) => setCardsNumber(event.target.value)}
      ></Form.Control>
      <Button 
        type="submit" 
        className="submitButton"
        onClick={handleClick}
      >
        <img src={IMAGES['tickBox']}></img>
      </Button>
    </Form>
  )
}

export const GameForm = connect(
  state => ({}),
  {
    buildBoard,
  }
)(GameFormPure);
