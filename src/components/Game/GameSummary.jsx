import React from 'react';
import { ResetButton } from './GameResetButton';


export const GameSummary = () => {
  return (
    <div>
      <p>Congratulations! You found all matches.</p>
      <ResetButton text='Start a new game'/>
    </div>
  )
}
