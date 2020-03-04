import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { formatDuration } from '../utils';
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
  
  return (
    <div>
      <Navigation />
      <h2>Scoreboard</h2>
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
