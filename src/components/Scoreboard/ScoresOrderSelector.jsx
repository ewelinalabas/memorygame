import React from 'react';
import { connect } from 'react-redux';
import { SCORES_ORDER_OPTIONS } from '../../constants';
import { changeScoresOrder } from '../../actions/scoreboard';

const ScoresOrderSelectorPure = ({ scoresOrder, changeScoresOrder }) => {
  return (
    <label htmlFor='ScoresOrderSelector'>Order
      <select
        name='ScoresOrderSelector'
        value={scoresOrder}
        onChange={(event) => changeScoresOrder(event.target.value)}
      >
        <option value={SCORES_ORDER_OPTIONS.OLDEST_TO_NEWEST}>oldest to newest</option>
        <option value={SCORES_ORDER_OPTIONS.NEWEST_TO_OLDEST}>newest to oldest</option>
        <option value={SCORES_ORDER_OPTIONS.DURATION_ASCENDING}>play time ascending</option>
        <option value={SCORES_ORDER_OPTIONS.DURATION_DESCENDING}>play time descending</option>
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
