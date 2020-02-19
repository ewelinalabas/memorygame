import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import { GameForm } from './components/GameForm';
import { Board } from './components/Board';
import { PHASES } from './constants';

const AppPure = ({ phase }) => {
  if(phase === PHASES[0]) {
    return ( <GameForm /> );
  } else if(phase === PHASES[1]) {
    return ( <Board /> )
  }
}

export const App = connect(
  state => ({
    phase: state.phase
  }),
  dispatch => ({})
)(AppPure);
