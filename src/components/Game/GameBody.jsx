import React from 'react';
import { connect } from 'react-redux';
import { Navigation } from '../Navigation';
import { GameForm } from './GameForm';
import { GamePlay } from './GamePlay';
import { Board } from './Board'
import { GameSummary } from './GameSummary';
import { Timer } from './Timer';
import { ResetButton } from './GameResetButton';
import { GAME_SETUP, PLAY, GAME_END } from '../../reducers/game';

const GameBodyPure = ({ phase }) => {
  if(phase === GAME_SETUP) {
    return ( 
      <div className="gameBody">
        {/* <Navigation /> */}
        <GameForm />
      </div>
    )
  } else if(phase === PLAY) {
    return (<GamePlay />)
  } else if(phase === GAME_END) {
    return ( 
      <div className="gameBody">
        {/* <Navigation /> */}
        <GameSummary />
      </div>
    )
  }
}

export const GameBody = connect(
  state => ({
    phase: state.game.phase
  })
)(GameBodyPure)
