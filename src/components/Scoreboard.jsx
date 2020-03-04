import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { formatDuration, compareNumbers } from '../utils';
import { Navigation } from './Navigation';
import { fetchPastScores } from '../actions';

const ScoreboardPure = ({ fetchPastScores, pastScores }) => {
  useEffect(() => fetchPastScores(), [])
  
  const pastScoresItems = pastScores.map((score, index) => {
    const formattedDuration = formatDuration(score.time)
    return (
      <tr key={index}>
        <td>{score.number_of_cards}</td>
        <td>{formattedDuration}</td>
      </tr>
    )
  })

  const getOptions = (scores) => {
    const allNumbers = scores.map(score => score.number_of_cards)
    const distinctNumbers = [ ...new Set(allNumbers) ]
    return distinctNumbers.sort(compareNumbers).map((number, index) => (
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
      <select>
        {optionsForNumberOfCards}
      </select>
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
    pastScores: state.pastScores
  }),
  {
    fetchPastScores
  }
)(ScoreboardPure)
