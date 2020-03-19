import React from 'react';
import { connect } from 'react-redux';
import { SCORES_ORDER_OPTIONS } from '../../constants';
import { changeScoresOrder } from '../../actions/scoreboard';
import { Form } from 'react-bootstrap';

const ScoresOrderSelectorPure = ({ scoresOrder, changeScoresOrder }) => {
  return (
    <Form className="filter">
      <Form.Label htmlFor="ScoresOrderSelector">
        Order
      </Form.Label>
      <Form.Control
        as="select"
        size="sm"
        name="ScoresOrderSelector"
        value={scoresOrder}
        onChange={(event) => changeScoresOrder(event.target.value)}
      >
        <option value={SCORES_ORDER_OPTIONS.OLDEST_TO_NEWEST}>oldest to newest</option>
        <option value={SCORES_ORDER_OPTIONS.NEWEST_TO_OLDEST}>newest to oldest</option>
        <option value={SCORES_ORDER_OPTIONS.DURATION_ASCENDING}>play time ascending</option>
        <option value={SCORES_ORDER_OPTIONS.DURATION_DESCENDING}>play time descending</option>
      </Form.Control>
    </Form>
  );
};

export const ScoresOrderSelector = connect(
  state => ({
    scoresOrder: state.scoreboard.scoresOrder
  }),
  {
    changeScoresOrder
  }
  )(ScoresOrderSelectorPure);
