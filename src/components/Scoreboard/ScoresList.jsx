import React from 'react';
import { ScoreItem } from './ScoreItem';

export const ScoresList = ({ scores }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Number of cards</th>
          <th>Play time</th>
        </tr>
      </thead>
      <tbody>
        {scores.map((score, index) => 
          <ScoreItem
            key={index}
            score={score}
            index={index}
          />)
        }
      </tbody>
    </table>
  )
}
