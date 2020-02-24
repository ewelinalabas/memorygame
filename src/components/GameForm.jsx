import React, { useState } from 'react';
import { connect } from 'react-redux';
import { buildBoard } from '../actions';

const GameFormPure = ({ buildBoard }) => {
  const MIN_NUMBER_OF_CARDS = 4
  const MAX_NUMBER_OF_CARDS = 20
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
    <div className="App">
      <p>Input number of cards</p>
      <input 
        type="number" 
        min={MIN_NUMBER_OF_CARDS}
        max={MAX_NUMBER_OF_CARDS}
        step="2"
        value={cardsNumber} 
        onChange={(event) => setCardsNumber(event.target.value)}
      ></input>
      <button type="submit" onClick={handleClick}>Play</button>
    </div>
  )
}

export const GameForm = connect(
  state => ({}),
  dispatch => ({
    buildBoard: (size) => dispatch(buildBoard(size)),
  })
)(GameFormPure);
