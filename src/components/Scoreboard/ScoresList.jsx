import React from 'react';
import { Table } from 'react-bootstrap';
import { ScoreItem } from './ScoreItem';

export const ScoresList = ({ scores }) => {
  return (
    <Table striped hover size="sm">
      <thead>
        <tr>
          <th>Number of cards</th>
          <th>Play time <br />[hh:mm:ss]</th>
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
    </Table>
  )
}

ScoresList.defaultProps = {
  scores: []
}
