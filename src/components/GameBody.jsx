import React from 'react';
import { connect } from 'react-redux';
import { GameForm } from './GameForm';
import { Board } from './Board'
import { GameSummary } from './GameSummary';
import { Timer } from './Timer';
import { ResetButton } from './GameResetButton';
import { GAME_SETUP, PLAY, GAME_END } from '../reducers/game';

const GameBodyPure = ({ phase }) => {
  if(phase === GAME_SETUP) {
    return ( <GameForm /> );
  } else if(phase === PLAY) {
    return ( 
      <div>
        <Timer /> 
        <Board />
        <ResetButton text='Reset game'/>
      </div>
    )
  } else if(phase === GAME_END) {
    return ( <GameSummary />)
  }
}

export const GameBody = connect(
  state => ({
    phase: state.game.phase
  })
)(GameBodyPure)
