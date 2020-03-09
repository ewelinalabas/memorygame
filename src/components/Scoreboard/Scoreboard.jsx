import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Navigation } from '../Navigation';
import { NumberOfCardsFilter } from './Filter';
import { ScoresOrderSelector } from './ScoresOrderSelector';
import { ScoresList } from './ScoresList';
import { scoresOrderOptions } from '../../constants';
import { fetchPastScores } from '../../actions/scoreboard';
import { compareNumbers, chunkify } from '../../utils';

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

  const sortScores = (scores, criterion, direction) => {
    return scores.sort((a, b) => compareNumbers(a, b, criterion, direction))
  }

  const orderScores = (scores) => {
    switch(scoresOrder) {
      case scoresOrderOptions.OLDEST_TO_NEWEST:
        return sortScores(scores, 'created_at', 'ASC');
      case scoresOrderOptions.NEWEST_TO_OLDEST:
        return sortScores(scores, 'created_at', 'DESC');
      case scoresOrderOptions.DURATION_ASCENDING:
        return sortScores(scores, 'time', 'ASC');
      case scoresOrderOptions.DURATION_DESCENDING:
        return sortScores(scores, 'time', 'DESC');
      default:
        return scores;
    }
  }

  const prepareScores = (scores) => {
    return chunkify(orderScores(filterScores(scores)))
  }
  
  return (
    <div>
      <Navigation />
      <h2>Scoreboard</h2>
      <NumberOfCardsFilter />
      <ScoresOrderSelector />
      <ScoresList scores={prepareScores(pastScores)}/>
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
