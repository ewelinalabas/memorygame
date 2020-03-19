import React, { useState } from 'react';
import { connect } from 'react-redux';
import { buildBoard } from '../../actions/game';
import { Form } from 'react-bootstrap';
import { MIN_NUMBER_OF_CARDS, MAX_NUMBER_OF_CARDS, IMAGES } from '../../constants';

const GameFormPure = ({ buildBoard }) => {
  const [cardsNumber, setCardsNumber] = useState(MIN_NUMBER_OF_CARDS);

  const validateInput = (value) => {
    return (
      value >= MIN_NUMBER_OF_CARDS &&
      value <= MAX_NUMBER_OF_CARDS &&
      value % 2 === 0
    ); 
  };

  const handleClick = () => {
    if(validateInput(cardsNumber)) {
      buildBoard(cardsNumber)
    };
  };

  return (
    <Form className="form">
      <Form.Label>How many cards would you like to play with?</Form.Label>
      <Form.Label className="sublabel">Choose an even number from 4 to 20.</Form.Label>
      <Form.Control 
        type="number" 
        min={MIN_NUMBER_OF_CARDS}
        max={MAX_NUMBER_OF_CARDS}
        step="2"
        value={cardsNumber} 
        onChange={(event) => setCardsNumber(event.target.value)}
      ></Form.Control>
      <button 
        type="submit" 
        className="submitButton"
        onClick={handleClick}
      >
        <img src={IMAGES['tickBox']}></img>
      </button>
    </Form>
  );
};

export const GameForm = connect(
  state => ({}),
  {
    buildBoard,
  }
)(GameFormPure);
