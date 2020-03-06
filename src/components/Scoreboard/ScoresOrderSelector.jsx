import React from 'react';
import { connect } from 'react-redux';
import { scoresOrderOptions } from '../../constants';
import { changeScoresOrder } from '../../actions/scoreboard';

const ScoresOrderSelectorPure = ({ scoresOrder, changeScoresOrder }) => {
  return (
    <select 
      value={scoresOrder}
      onChange={(event) => changeScoresOrder(event.target.value)}
    >
      <option value={scoresOrderOptions.LATEST_TO_NEWEST}>L-N</option>
      <option value={scoresOrderOptions.NEWEST_TO_LATEST}>N-L</option>
      <option value={scoresOrderOptions.DURATION_ASCENDING}>DA</option>
      <option value={scoresOrderOptions.DURATION_DESCENDING}>DD</option>
    </select>
  )
}

export const ScoresOrderSelector = connect(
  state => ({
    scoresOrder: state.scoreboard.scoresOrder
  }),
  {
    changeScoresOrder
  }
)(ScoresOrderSelectorPure)
