import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { formatDuration, compareNumbers } from '../utils';
import { Navigation } from './Navigation';
import { fetchPastScores } from '../actions';

const ScoreboardPure = ({ fetchPastScores, pastScores }) => {
  const [numberOfCards, setNumberOfCards] = useState('All')
  useEffect(() => fetchPastScores(), [])

  const filterPastScores = (pastScores) => {
    if(numberOfCards !== 'All') {
      return pastScores.filter(score =>
        score.number_of_cards === parseInt(numberOfCards)
      )
    } else {
      return pastScores
    }
  }
  
  const pastScoresItems = filterPastScores(pastScores).map((score, index) => {
    return (
      <tr key={index}>
        <td>{score.number_of_cards}</td>
        <td>{formatDuration(score.time)}</td>
      </tr>
    )
  })

  const getOptions = (scores) => {
    const allNumbers = scores.map(score => score.number_of_cards)
    const distinctNumbers = [ ...new Set(allNumbers) ]
    distinctNumbers
      .sort(compareNumbers)
      .unshift('All')

    return distinctNumbers.map((number, index) => (
      <option value={number} key={index}>
        {number}
      </option>
    ))
  }

  const optionsForNumberOfCards = getOptions(pastScores)
  
  return (
    <div>
      <Navigation />
      <h2>Scoreboard</h2>
      <select value={numberOfCards} onChange={(event) => setNumberOfCards(event.target.value)}>
        {optionsForNumberOfCards}
      </select >
      <table>
        <thead>
          <tr>
            <th>Number of cards</th>
            <th>Play time</th>
          </tr>
        </thead>
        <tbody>
          {pastScoresItems}
        </tbody>
      </table>
    </div>
  )
}

export const Scoreboard = connect(
  state => ({
    pastScores: state.scoreboard.pastScores
  }),
  {
    fetchPastScores
  }
)(ScoreboardPure)
