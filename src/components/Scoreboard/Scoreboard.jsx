import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Container } from 'react-bootstrap';
import '../../styles/Scoreboard.css';
import { LoadingMessage } from './LoadingMessage';
import { ErrorMessage } from './ErrorMessage';
import { NumberOfCardsFilter } from './Filter';
import { ScoresOrderSelector } from './ScoresOrderSelector';
import { ScoresList } from './ScoresList';
import { ChunksList } from './ChunksList';
import { fetchPastScores } from '../../actions/scoreboard';
import { SCORES_ORDER_OPTIONS, NUMBER_OF_ELEMENTS_PER_PAGE } from '../../constants';
import { compareNumbers, chunkify } from '../../utils';


const ScoreboardPure = ({ 
  fetchPastScores, 
  loading,
  pastScores, 
  error,
  numberOfCards,
  scoresOrder,
  selectedChunk }) => {
  useEffect(() => fetchPastScores(), [fetchPastScores]);

  const filterScores = (scores) => {
    if(numberOfCards !== 'All') {
      return scores.filter(score =>
        score.number_of_cards === parseInt(numberOfCards)
      )
    } else {
      return scores
    };
  };

  const sortScores = (scores, criterion, direction) => {
    return scores.sort((a, b) => compareNumbers(a, b, criterion, direction));
  };

  const orderScores = (scores) => {
    switch(scoresOrder) {
      case SCORES_ORDER_OPTIONS.OLDEST_TO_NEWEST:
        return sortScores(scores, 'created_at', 'ASC');
      case SCORES_ORDER_OPTIONS.NEWEST_TO_OLDEST:
        return sortScores(scores, 'created_at', 'DESC');
      case SCORES_ORDER_OPTIONS.DURATION_ASCENDING:
        return sortScores(scores, 'time', 'ASC');
      case SCORES_ORDER_OPTIONS.DURATION_DESCENDING:
        return sortScores(scores, 'time', 'DESC');
      default:
        return scores;
    };
  };

  const preparedScores = 
    chunkify(
      orderScores(
        filterScores(pastScores)
      ), 
    NUMBER_OF_ELEMENTS_PER_PAGE);

  return (
    <Container className="scoreboardBody">
      { loading && <LoadingMessage /> }
      { error && <ErrorMessage />}
      { !loading && !error &&
        <Container className="scoreboard">
          <div className="filtersGroup">
            <NumberOfCardsFilter />
            <ScoresOrderSelector />
          </div>
          <ScoresList scores={preparedScores[selectedChunk]} />
          <ChunksList chunks={preparedScores} />
        </Container>
      }
    </Container>
  );
};

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
)(ScoreboardPure);
