import React from 'react';
import { connect } from 'react-redux';
import { Form } from 'react-bootstrap';
import { setNumberOfCardsFilter } from '../../actions/scoreboard';
import { compareNumbers } from '../../utils';

const NumberOfCardsFilterPure = ({ pastScores, numberOfCards, setNumberOfCardsFilter }) => {
  const getOptions = (scores) => {
    const allNumbers = scores.map(score => score.number_of_cards);
    let distinctNumbers = [ ...new Set(allNumbers) ]
    distinctNumbers
      .sort(compareNumbers)
      .unshift("All")

    return distinctNumbers.map((number, index) => (
      <option 
        value={number} 
        key={index}
      >
        {number}
      </option>
    ));
  };

  const optionsForNumberOfCards = getOptions(pastScores);

  return (
    <Form className="filter">
      <Form.Label htmlFor="numberOfCardsFilter">
        Filter by number of cards
      </Form.Label>
      <Form.Control
        as="select"
        size="sm"
        custom="true"
        name="numberOfCardsFilter"
        value={numberOfCards} 
        onChange={(event) => setNumberOfCardsFilter(event.target.value)}
      >
          {optionsForNumberOfCards}
      </Form.Control>
    </Form>
  );
};

export const NumberOfCardsFilter = connect(
  state => ({
    pastScores: state.scoreboard.pastScores,
    numberOfCards: state.scoreboard.numberOfCardsFilter
  }),
  {
    setNumberOfCardsFilter
  }
)(NumberOfCardsFilterPure);
