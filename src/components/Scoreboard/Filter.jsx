import React from 'react';
import { connect } from 'react-redux';
import { compareNumbers } from '../../utils';
import { setNumberOfCardsFilter } from '../../actions/scoreboard';

const NumberOfCardsFilterPure = ({ pastScores, numberOfCards, setNumberOfCardsFilter }) => {
  const getOptions = (scores) => {
    const allNumbers = scores.map(score => score.number_of_cards)
    const distinctNumbers = [ ...new Set(allNumbers) ]
    distinctNumbers
      .sort(compareNumbers)
      .unshift('All')

    return distinctNumbers.map((number, index) => (
      <option 
        value={number} 
        key={index}
      >
        {number}
      </option>
    ))
  }

  const optionsForNumberOfCards = getOptions(pastScores)

  return(
    <select 
      value={numberOfCards} 
      onChange={(event) => setNumberOfCardsFilter(event.target.value)}
    >
        {optionsForNumberOfCards}
    </select >
  )
}

export const NumberOfCardsFilter = connect(
  state => ({
    pastScores: state.scoreboard.pastScores,
    numberOfCards: state.scoreboard.numberOfCardsFilter
  }),
  {
    setNumberOfCardsFilter
  }
)(NumberOfCardsFilterPure)
