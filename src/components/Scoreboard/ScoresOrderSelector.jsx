import React from 'react';
import { connect } from 'react-redux';
import { scoresOrderOptions } from '../../constants';
import { changeScoresOrder } from '../../actions/scoreboard';

const ScoresOrderSelectorPure = ({ scoresOrder, changeScoresOrder }) => {
  return (
    <label for='ScoresOrderSelector'>Order
      <select
        name='ScoresOrderSelector'
        value={scoresOrder}
        onChange={(event) => changeScoresOrder(event.target.value)}
      >
        <option value={scoresOrderOptions.OLDEST_TO_NEWEST}>oldest to newest</option>
        <option value={scoresOrderOptions.NEWEST_TO_OLDEST}>newest to oldest</option>
        <option value={scoresOrderOptions.DURATION_ASCENDING}>play time ascending</option>
        <option value={scoresOrderOptions.DURATION_DESCENDING}>play time descending</option>
      </select>
    </label>
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
