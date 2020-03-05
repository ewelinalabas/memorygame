import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { formatDuration } from '../utils';
import { Navigation } from './Navigation';
import { NumberOfCardsFilter } from './Filters';
import { fetchPastScores } from '../actions/scoreboard';

const ScoreboardPure = ({ fetchPastScores, pastScores, numberOfCards }) => {
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
  
  return (
    <div>
      <Navigation />
      <h2>Scoreboard</h2>
      <NumberOfCardsFilter />
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
    pastScores: state.scoreboard.pastScores,
    numberOfCards: state.scoreboard.NumberOfCardsFilter
  }),
  {
    fetchPastScores
  }
)(ScoreboardPure)
