import React from 'react';
import { connect } from 'react-redux';
import { GameForm } from './GameForm';
import { GamePlay } from './GamePlay';
import { GameSummary } from './GameSummary';
import { PHASES } from '../../constants';

const GameBodyPure = ({ phase }) => {
  if(phase === PHASES.GAME_SETUP) {
    return (<GameForm />)
  } else if(phase === PHASES.PLAY) {
    return (<GamePlay />)
  } else if(phase === PHASES.GAME_END) {
    return (<GameSummary />)
  };
};

export const GameBody = connect(
  state => ({
    phase: state.game.phase
  })
)(GameBodyPure);
