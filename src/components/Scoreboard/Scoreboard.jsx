import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Navigation } from '../Navigation';
import { NumberOfCardsFilter } from './Filter';
import { ScoresList } from './ScoresList';
import { fetchPastScores } from '../../actions/scoreboard';

const ScoreboardPure = ({ fetchPastScores, pastScores, numberOfCards }) => {
  useEffect(() => fetchPastScores(), [])

  const filterPastScores = (pastScores) => {
    if(numberOfCards !== 'All') {
      return pastScores.filter(score =>
        score.number_of_cards === parseInt(numberOfCards)
      )
    } else {
      return pastScores
    }
  }
  
  return (
    <div>
      <Navigation />
      <h2>Scoreboard</h2>
      <NumberOfCardsFilter />
      <ScoresList scores={filterPastScores(pastScores)}/>
    </div>
  )
}

export const Scoreboard = connect(
  state => ({
    pastScores: state.scoreboard.pastScores,
    numberOfCards: state.scoreboard.numberOfCardsFilter
  }),
  {
    fetchPastScores
  }
)(ScoreboardPure)
