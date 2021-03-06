import React from 'react';
import { connect } from 'react-redux';
import { Pagination } from 'react-bootstrap';
import { changeChunkOfScores } from '../../actions/scoreboard';

const ScoresPaginationPure = ({
  chunks, 
  selectedChunkOfScores, 
  changeChunkOfScores }) => {
  return (
    <Pagination 
      onClick={(event) => changeChunkOfScores(event.target.text - 1)} 
      size="sm"
    >
      {chunks.map((chunk, index) => (
        <Pagination.Item 
          key={index}
          active={selectedChunkOfScores === index}
        >
          {index + 1}
        </Pagination.Item>
      ))}
    </Pagination>
  );
};

export const ScoresPagination = connect(
  state => ({
    selectedChunkOfScores: state.scoreboard.selectedChunkOfScores
  }), 
  {
    changeChunkOfScores
  }
)(ScoresPaginationPure);

ScoresPaginationPure.defaultProps = {
  chunks: []
};
