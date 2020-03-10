import React from 'react';
import { connect } from 'react-redux';
import { changeChunkOfScores } from '../../actions/scoreboard'

const ChunksListPure = ({ chunks, changeChunkOfScores }) => {
  return (
    <div>
      {chunks.map((chunk, index) => (
        <button 
          key={index}
          value={index}
          onClick={(event) => changeChunkOfScores(event.target.value)}
        >
          {index + 1}
        </button>
      ))}
    </div>
  )
}

export const ChunksList = connect(
  state => ({}), 
  {
    changeChunkOfScores
  }
)(ChunksListPure)

ChunksListPure.defaultProps = {
  chunks: []
}
