import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import { GameForm } from './components/GameForm';
import { Board } from './components/Board';
import { GameSummary } from './components/GameSummary';
import { Timer } from './components/Timer';
import { GAME_SETUP, PLAY, GAME_END } from './rootReducer';

const AppPure = ({ phase }) => {
  if(phase === GAME_SETUP) {
    return ( <GameForm /> );
  } else if(phase === PLAY) {
    return ( 
      <div>
        <Timer /> 
        <Board />
      </div>
    )
  } else if(phase === GAME_END) {
    return ( <GameSummary />)
  }
}

export const App = connect(
  state => ({
    phase: state.phase
  }),
  dispatch => ({})
)(AppPure);
