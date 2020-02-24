import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as data from '../data.json';

export const Scoreboard = () => {
  const [pastScores, setPastScores] = useState([])
  // useEffect(() => {
  //   axios.get('http://salty-headland-84520.herokuapp.com/scores')
  //   .then(response => setPastScore(response.data))
  // }, [])

  useEffect(() => {
    setPastScores(data.default)
  }, [])
  
  const pastScoresItems = pastScores.map((score, index) => {
    return (
      <tr key={index}>
        <td>{score.number_of_cards}</td>
        <td>{score.time}</td>
      </tr>
    )
  })
  
  return (
    <div>
      <h2>Scoreboard</h2>
      <table>
        <tr>
          <th>Number of cards</th>
          <th>Play time</th>
        </tr>
        {pastScoresItems}
      </table>
    </div>
  )
}
