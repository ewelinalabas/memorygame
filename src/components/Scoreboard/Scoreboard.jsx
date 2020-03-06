import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Navigation } from '../Navigation';
import { NumberOfCardsFilter } from './Filter';
import { ScoresOrderSelector } from './ScoresOrderSelector';
import { ScoresList } from './ScoresList';
import { scoresOrderOptions } from '../../constants';
import { fetchPastScores } from '../../actions/scoreboard';
import { compareNumbers } from '../../utils';

const ScoreboardPure = ({ 
  fetchPastScores, 
  pastScores, 
  numberOfCards,
  scoresOrder }) => {
  useEffect(() => fetchPastScores(), [])

  const filterScores = (scores) => {
    if(numberOfCards !== 'All') {
      return scores.filter(score =>
        score.number_of_cards === parseInt(numberOfCards)
      )
    } else {
      return scores
    }
  }

  const sortScores = (scores, key, direction) => {
    return scores.sort((a, b) => compareNumbers(a, b, key, direction))
  }

  const orderScores = (scores) => {
    switch(scoresOrder) {
      case scoresOrderOptions.LATEST_TO_NEWEST:
        return sortScores(scores, 'created_at', 'ASC');
      case scoresOrderOptions.NEWEST_TO_LATEST:
        return sortScores(scores, 'created_at', 'DESC');
      case scoresOrderOptions.DURATION_ASCENDING:
        return sortScores(scores, 'time', 'ASC');
      case scoresOrderOptions.DURATION_DESCENDING:
        return sortScores(scores, 'time', 'DESC');
      default:
        return scores;
    }
  }
  
  return (
    <div>
      <Navigation />
      <h2>Scoreboard</h2>
      <NumberOfCardsFilter />
      <ScoresOrderSelector />
      <ScoresList scores={orderScores(filterScores(pastScores))}/>
    </div>
  )
}

export const Scoreboard = connect(
  state => ({
    pastScores: state.scoreboard.pastScores,
    numberOfCards: state.scoreboard.numberOfCardsFilter,
    scoresOrder: state.scoreboard.scoresOrder
  }),
  {
    fetchPastScores,
  }
)(ScoreboardPure)
