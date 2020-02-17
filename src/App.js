import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import { GameForm } from './components/GameForm';
import { Board } from './components/Board';

const AppPure = ({ phase }) => {
  if(phase === 'gameSetup') {
    return ( <GameForm /> );
  } else if(phase === 'play') {
    return ( <Board /> )
  }
}

export const App = connect(
  state => ({
    phase: state.phase
  }),
  dispatch => ({})
)(AppPure);
