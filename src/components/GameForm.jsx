import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setBoardSize } from '../actions';

const GameFormPure = (props) => {
  const [cardsNumber, setCardsNumber] = useState(4)
  const validateInput = (value) => {
    return (value >= 4 && value % 2 === 0) ? true : false
  }
  const handleClick = () => {
    validateInput(cardsNumber) && props.setBoardSize(cardsNumber)
  }

  return (
    <div className="App">
      <p>Input number of cards</p>
      <input 
        type="number" 
        min="4" 
        max="20" 
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
    setBoardSize: (size) => dispatch(setBoardSize(size))
  })
)(GameFormPure);