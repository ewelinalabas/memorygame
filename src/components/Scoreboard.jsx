import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { formatDuration } from '../utils';

export const Scoreboard = () => {
  const [pastScores, setPastScores] = useState([])
  useEffect(() => {
    axios.get('http://salty-headland-84520.herokuapp.com/scores')
    .then(response => setPastScores(response.data))
  }, [])
  
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
