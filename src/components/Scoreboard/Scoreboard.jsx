import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Navigation } from '../Navigation';
import { LoadingMessage } from './LoadingMessage';
import { ErrorMessage } from './ErrorMessage';
import { NumberOfCardsFilter } from './Filter';
import { ScoresOrderSelector } from './ScoresOrderSelector';
import { ScoresList } from './ScoresList';
import { ChunksList } from './ChunksList';
import { scoresOrderOptions } from '../../constants';
import { fetchPastScores } from '../../actions/scoreboard';
import { compareNumbers, chunkify } from '../../utils';

const ScoreboardPure = ({ 
  fetchPastScores, 
  loading,
  pastScores, 
  error,
  numberOfCards,
  scoresOrder,
  selectedChunk }) => {
  useEffect(() => fetchPastScores(), [fetchPastScores])

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

  const preparedScores = chunkify(orderScores(filterScores(pastScores)))

  return (
    <div>
      <Navigation />
      <h2>Scoreboard</h2>
      { loading && <LoadingMessage /> }
      { error && <ErrorMessage />}
      { !loading && !error &&
        <div>
          <NumberOfCardsFilter />
          <ScoresOrderSelector />
          <ScoresList scores={preparedScores[selectedChunk]} />
          <ChunksList chunks={preparedScores} />
        </div>
      }
    </div>
  )
}

export const Scoreboard = connect(
  state => ({
    loading: state.scoreboard.loading,
    pastScores: state.scoreboard.pastScores,
    error: state.scoreboard.error,
    numberOfCards: state.scoreboard.numberOfCardsFilter,
    scoresOrder: state.scoreboard.scoresOrder,
    selectedChunk: state.scoreboard.selectedChunkOfScores
  }),
  {
    fetchPastScores
  }
)(ScoreboardPure)
