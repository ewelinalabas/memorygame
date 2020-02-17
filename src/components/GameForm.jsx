import React, { useState } from 'react';
import { connect } from 'react-redux';
import { buildBoard } from '../actions';

const GameFormPure = (props) => {
  const minNumberOfCards = 4
  const maxNumberOfCards = 20
  const [cardsNumber, setCardsNumber] = useState(minNumberOfCards)

  const validateInput = (value) => {
    return (value >= minNumberOfCards && value % 2 === 0) ? true : false
  }
  const handleClick = () => {
    if(validateInput(cardsNumber)) {
      props.buildBoard(cardsNumber)
    }
  }

  return (
    <div className="App">
      <p>Input number of cards</p>
      <input 
        type="number" 
        min={minNumberOfCards}
        max={maxNumberOfCards}
        step="2"
        value={cardsNumber} 
        onChange={(e) => setCardsNumber(e.target.value)}
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
