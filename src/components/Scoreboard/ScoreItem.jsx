import React from 'react';
import { formatDuration } from '../../utils';

export const ScoreItem = ({ score, index }) => {
  return (
    <tr key={index}>
        <td>{score.number_of_cards}</td>
        <td>{formatDuration(score.time)}</td>
    </tr>
  );
};
